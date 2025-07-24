import React, { useState } from 'react';
import { useCartStore } from '../utils/cartUtils';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Popover,
  Box,
  Divider,
  Button
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getItemCount = useCartStore((state) => state.getItemCount);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <AppBar position="static" className="bg-white shadow text-black">
        <Toolbar className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {/* Sol: Marka */}
          <Typography variant="h6" className="font-bold tracking-wide text-red-800">
            Beyza Kilim
          </Typography>

          {/* Sağ: Sepet */}
          <IconButton onClick={handleCartClick}>
            <Badge badgeContent={getItemCount()} color="error">
              <ShoppingCartIcon className="text-red-800" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
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
          Sepetiniz
        </Typography>
        <Divider sx={{ my: 1 }} />

        {cart.length === 0 ? (
          <Typography variant="body2">Sepetinizde ürün yok.</Typography>
        ) : (
          <>
            <Box className="max-h-60 overflow-y-auto space-y-3">
              {cart.map(({ product, quantity }, i) => (
                <Box key={i} className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[48px] h-[48px] object-cover rounded-sm"
                    style={{ maxWidth: '30%', height: 'auto' }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" fontWeight="medium">
                      {product.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ₺{product.price} — {quantity} adet
                    </Typography>
                  </Box>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Sil
                  </Button>
                </Box>
              ))}
            </Box>

            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle2" align="right" sx={{ fontWeight: 'bold' }}>
              Toplam: ₺{total.toFixed(2)}
            </Typography>
          </>
        )}
      </Popover>
    </>
  );
};
