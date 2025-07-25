import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList() {
  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-8 text-red-700">
        Beyza Kilim | El Dokuması ve Özel Tasarım Kilimler
      </h2>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 box-border">
          <ProductCard product={product} />
        </div>
        ))}
      </Grid>
    </>
  );
}
