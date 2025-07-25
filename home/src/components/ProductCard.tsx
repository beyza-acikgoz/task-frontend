'use client';

import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import React from 'react';
import { Product } from '../data/products';
import { addToCart } from '../utils/cartUtils';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card
      sx={{ maxWidth: 300, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      className="shadow-lg hover:scale-[1.02] transition-transform"
      elevation={6}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent className="flex flex-col flex-grow">
        <Typography variant="h6" component="h3" className="font-bold">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-2 flex-grow">
          {product.description}
        </Typography>
        <div className="mt-4 flex justify-between items-center">
          <Typography variant="h6" color="success.main" className="font-semibold">
            ₺{product.price}
          </Typography>
          <Button size="small" variant="contained" color="primary" onClick={() => addToCart(product)}>
            Sepete Ekle
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
