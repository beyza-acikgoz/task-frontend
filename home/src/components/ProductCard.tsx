import React from 'react';
import { Product } from '../data/products';
import { addToCart } from '../utils/cartUtils';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card
      className="shadow-xl transition-transform hover:scale-[1.02]"
      sx={{ maxWidth: 300, overflow: 'visible' }}
      elevation={6}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent className="flex flex-col justify-between h-48">
        <Typography variant="h6" className="font-bold">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-2">
          {product.description}
        </Typography>
        <div className="mt-4 flex justify-between items-center">
          <Typography variant="h6" className="text-green-700 font-semibold">
            ₺{product.price}
          </Typography>
          <Button
            onClick={() => addToCart(product)}
            variant="contained"
            color="primary"
            size="small"
          >
            Sepete Ekle
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
