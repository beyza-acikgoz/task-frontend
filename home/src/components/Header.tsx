import React, { useState, Suspense } from 'react';
import { useCartStore } from '../utils/cartUtils';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import {ErrorBoundary} from './ErrorBoundary';
import { safeLazy } from '../utils/safeLazy';

const CartPopover = safeLazy(() => import('cart/CartPopover'));

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const cart = useCartStore(state => state.cart);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const getItemCount = useCartStore(state => state.getItemCount);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(prev => (prev ? null : event.currentTarget));
  };

  const handleCheckout = () => {
    setAnchorEl(null);
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/box' } });
    } else {
      navigate('/box');
    }
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleLogout = () => {
    handleProfileClose();
    onLogout();
    navigate('/');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#000", color: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: "2rem" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, cursor: "pointer" }} onClick={() => navigate('/')}>
            Beyza Kilim
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {!isAuthenticated ? (
              <>
                <Button color="inherit" onClick={handleLoginRedirect}>
                  Giriş Yap
                </Button>
                <IconButton onClick={handleCartClick} color="inherit" aria-label="cart">
                  <Badge badgeContent={getItemCount()} color="error">
                    <ShoppingCartIcon className="text-red-800" />
                  </Badge>
                </IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={handleCartClick} color="inherit" aria-label="cart">
                  <Badge badgeContent={getItemCount()} color="error">
                    <ShoppingCartIcon className="text-red-800" />
                  </Badge>
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={handleProfileClick}
                  aria-controls={profileMenuAnchor ? 'profile-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={profileMenuAnchor ? 'true' : undefined}
                >
                  <AccountCircleIcon fontSize="large" />
                </IconButton>

                <Menu
                  id="profile-menu"
                  anchorEl={profileMenuAnchor}
                  open={Boolean(profileMenuAnchor)}
                  onClose={handleProfileClose}
                  MenuListProps={{
                    'aria-labelledby': 'profile-button',
                  }}
                >
                  <MenuItem onClick={() => { handleProfileClose(); navigate('/profile'); }}>
                    Profilim
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Çıkış Yap</MenuItem>
                  <MenuItem onClick={() => { handleProfileClose(); navigate('/box'); }}>
                    Sepetim
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <ErrorBoundary fallback={<div>Sepet bileşeni yüklenirken hata oluştu.</div>}>
        <Suspense fallback={<div>Loading..</div>}>
          <CartPopover
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            cart={cart}
            removeFromCart={removeFromCart}
            onCheckout={handleCheckout}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
