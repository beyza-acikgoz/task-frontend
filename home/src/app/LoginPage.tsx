import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Nereden geldi bilgisi (örneğin satın alma sayfası)
  const from = (location.state as { from?: string })?.from || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Basit sabit kullanıcı kontrolü
    if (username === "admin" && password === "admin") {
      setLoading(false);
      onLogin();
      navigate(from, { replace: true });  // Giriş sonrası önceki sayfaya dön
    } else {
      setLoading(false);
      setError("Kullanıcı adı veya şifre yanlış");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" align="center" mb={3}>
        Giriş Yap
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            label="Kullanıcı Adı"
            name="username"
            type="text"
            required
            fullWidth
            placeholder="admin"
          />
          <TextField
            label="Şifre"
            name="password"
            type="password"
            required
            fullWidth
            placeholder="admin"
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
