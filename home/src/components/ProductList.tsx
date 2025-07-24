import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const ProductList = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'rgb(127, 29, 29)' }}
      >
        Beyza Kilim | El Dokuması ve Özel Tasarım Kilimler
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="flex-start" // sola yaslı kartlar
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
