import React from 'react';
import ProductList from '../components/ProductList';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-8 py-20">
      <ProductList />
    </main>
  );
}
