import React from 'react';
import { Button } from '@mui/material';

type Props = {
  onClick: () => void;
};

export const GoToCartButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth
      sx={{ mt: 1 }}
      onClick={onClick}
    >
      Sepete Git
    </Button>
  );
};
