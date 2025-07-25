'use client';

import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import CartItemList from '../../components/CartItemList';

interface BoxPageProps {
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
}

export default function BoxPage({ cart, removeFromCart }: BoxPageProps) {
  const handlePayment = () => {
    alert('Ödeme işlemi başlatıldı!');
  };

  return (
    <Box maxWidth="md" mx="auto" p={4}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="rgb(127, 29, 29)">
        Sepet ve Ödeme Sayfası
      </Typography>

      {/* ✅ Sepet Ürünleri Listesi */}
      <CartItemList cart={cart} onRemove={removeFromCart} />

      <Divider sx={{ my: 4 }} />

      <Typography mb={2}>
        Ödeme seçenekleri:
      </Typography>
      <ul>
        <li>Kredi Kartı</li>
        <li>Kapıda Ödeme</li>
        <li>Havale / EFT</li>
      </ul>

      <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={handlePayment}>
        Ödemeyi Tamamla
      </Button>
    </Box>
  );
}