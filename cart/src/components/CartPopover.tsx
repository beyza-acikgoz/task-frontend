'use client';

import React from 'react';
import { Popover, Typography, Divider, Button, Box } from '@mui/material';
import CartItemList from './CartItemList';

interface CartPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  cart: {
    product: {
      id: number;
      title: string;
      price: number;
      image: string;
    };
    quantity: number;
  }[];
  removeFromCart: (id: number) => void;
  onCheckout: () => void;  
}

export default function CartPopover({
  anchorEl,
  onClose,
  cart,
  removeFromCart,
  onCheckout,
}: CartPopoverProps) {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          maxWidth: 320,
          width: '90vw',
          p: 2,
        },
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: 'rgb(127, 29, 29)', fontWeight: 'bold' }}>
        Sepetiniz burası mf 
      </Typography>
      <Divider sx={{ my: 1 }} />

      <CartItemList cart={cart} onRemove={removeFromCart} />

      {cart.length > 0 && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button variant="contained" color="primary" fullWidth onClick={onCheckout}>
            Satın Al
          </Button>
        </Box>
      )}
    </Popover>
  );
}
