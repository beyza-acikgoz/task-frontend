import React from 'react';
import { CartList } from './CartList';

export const CartPage = () => {
  const handleBuy = () => {
    alert('Satın alma işlemi henüz implement edilmedi.');
  };

  return (
    <main style={{ maxWidth: 700, margin: 'auto', padding: 16 }}>
      <h1>Sepetiniz</h1>
      <CartList showBuyButton onBuyClick={handleBuy} />
    </main>
  );
};
