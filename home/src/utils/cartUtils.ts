import { create } from 'zustand';
import { Product } from '../data/products';

type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getItemCount: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      set({
        cart: cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { product, quantity: 1 }] });
    }
  },

  removeFromCart: (productId) => {
    const cart = get().cart;
    const existingItem = cart.find((item) => item.product.id === productId);

    if (!existingItem) return;

    if (existingItem.quantity === 1) {
      // Tümünü sil
      set({ cart: cart.filter((item) => item.product.id !== productId) });
    } else {
      // Bir adet azalt
      set({
        cart: cart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      });
    }
  },

  getItemCount: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },
}));

export const addToCart = (product: Product) => {
  useCartStore.getState().addToCart(product);
};