import React from 'react';
import { useCartStore } from 'home/cartUtils';
import { Box, Typography, Button } from '@mui/material';

type Props = {
  showBuyButton?: boolean; // Satın al butonunu gösterme opsiyonu
  onBuyClick?: () => void;  // Satın al butonuna tıklama callback'i
};

export const CartList: React.FC<Props> = ({ showBuyButton = false, onBuyClick }) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cart.length === 0) {
    return <Typography variant="body1">Sepetinizde ürün yok.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      {cart.map(({ product, quantity }) => (
        <Box key={product.id} display="flex" alignItems="center" gap={2} mb={2}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }}
          />
          <Box flexGrow={1}>
            <Typography variant="body1" fontWeight="medium">
              {product.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ₺{product.price} — {quantity} adet
            </Typography>
          </Box>
          <Button variant="outlined" color="error" size="small" onClick={() => removeFromCart(product.id)}>
            Sil
          </Button>
        </Box>
      ))}

      <Typography variant="h6" align="right" fontWeight="bold" mt={3}>
        Toplam: ₺{total.toFixed(2)}
      </Typography>

      {showBuyButton && (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={onBuyClick}
        >
          Satın Al
        </Button>
      )}
    </Box>
  );
};
