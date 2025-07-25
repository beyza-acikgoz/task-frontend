'use client';

import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';

interface CartProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItem {
  product: CartProduct;
  quantity: number;
}

interface BoxProductListProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export default function BoxProductList({ cart, removeFromCart }: BoxProductListProps) {
  const handlePayment = () => {
    alert('Ödeme işlemi başlatıldı!');
  };

  return (
    <Box maxWidth="md" mx="auto" p={4}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="rgb(127, 29, 29)">
        Sepet ve Ödeme Sayfası
      </Typography>

      {cart.length === 0 ? (
        <Typography>Sepetiniz boş.</Typography>
      ) : (
        <>
          <Box sx={{ maxHeight: 320, overflowY: 'auto' }}>
            {cart.map(({ product, quantity }) => (
              <Box
                key={product.id}
                sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  width={48}
                  height={48}
                  style={{ borderRadius: 4, marginRight: 16, objectFit: 'cover' }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Adet: {quantity}
                  </Typography>
                </Box>
                <Typography sx={{ minWidth: 80, textAlign: 'right' }}>
                  ₺{(product.price * quantity).toFixed(2)}
                </Typography>
                <Button
                  color="error"
                  size="small"
                  onClick={() => removeFromCart(product.id)}
                  sx={{ ml: 2 }}
                >
                  Sil
                </Button>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="subtitle1" align="right" sx={{ fontWeight: 'bold' }}>
            Toplam: ₺
            {cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)}
          </Typography>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handlePayment}>
              Ödemeyi Tamamla
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
