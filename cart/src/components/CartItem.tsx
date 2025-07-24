import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Product } from "home/cartUtils";

const CartItem = ({ product }: { product: Product }) => {
  return (
    <Card className="shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body1" color="textSecondary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartItem;
