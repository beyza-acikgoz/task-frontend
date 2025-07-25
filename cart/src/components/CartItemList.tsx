'use client';

import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CartItem from './CartItem';

interface CartItemListProps {
  cart: {
    product: {
      id: number;
      title: string;
      price: number;
      image: string;
    };
    quantity: number;
  }[];
  onRemove: (id: number) => void;
}

export default function CartItemList({ cart, onRemove }: CartItemListProps) {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cart.length === 0) {
    return <Typography variant="body2">Sepetinizde ürün yok.</Typography>;
  }

  return (
    <>
      <Box className="max-h-60 overflow-y-auto space-y-3">
        {cart.map(({ product, quantity }, i) => (
          <CartItem key={product.id} product={product} quantity={quantity} onRemove={onRemove} />
        ))}
      </Box>

      <Divider sx={{ my: 1 }} />
      <Typography variant="subtitle2" align="right" sx={{ fontWeight: 'bold' }}>
        Toplam: ₺{total.toFixed(2)}
      </Typography>
    </>
  );
}
