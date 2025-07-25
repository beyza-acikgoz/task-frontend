import React, { Suspense } from 'react';
import { useCartStore } from '../utils/cartUtils'; // store yolunu kendine göre ayarla
import { safeLazy } from '../utils/safeLazy';
const BoxProductList = safeLazy(() => import('cart/BoxProductList'));
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function HomePage() {
  const cart = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);

  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <ErrorBoundary fallback={<div>Ürünler yüklenirken bir hata oluştu.</div>}>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <BoxProductList cart={cart} removeFromCart={removeFromCart} />
      </Suspense>
      </ErrorBoundary>
    </main>
  );
}
