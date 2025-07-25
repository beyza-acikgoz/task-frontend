import React from 'react';
import { Button, Box, Typography } from '@mui/material';

interface CartItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  quantity: number;
  onRemove: (id: number) => void;
}

export default function CartItem({ product, quantity, onRemove }: CartItemProps) {
  return (
    <Box className="flex items-center gap-3">
      <img
        src={product.image}
        alt={product.title}
        className="w-[48px] h-[48px] object-cover rounded-sm flex-shrink-0"
        style={{ maxWidth: '30%' }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body2" fontWeight="medium">
          {product.title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          ₺{product.price} — {quantity} adet
        </Typography>
      </Box>
      <Button size="small" color="error" onClick={() => onRemove(product.id)}>
        Sil
      </Button>
    </Box>
  );
}
