import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProductList from "./components/ProductList";
import Footer from "./components/footer/footer";
import AboutPage from './app/AboutPage';
import ContactPage from './app/ContactPage';    
import FAQPage from './app/FAQPage';
import BlogPage from './app/BlogPage';  
import DropshippingPage from './app/DropshippingPage';
import PrivacyPage from './app/PrivacyPage';
import TermsPage from './app/TermsPage';
import HomePage from "./app/HomePage";
import BoxPage from './app/BoxPage';
import LoginPage from './app/LoginPage';
import { Header } from "./components/Header";
import ProfilePage from './app/ProfilePage';

function PrivateRoute({ isAuthenticated, children }: { isAuthenticated: boolean, children: JSX.Element }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

        <main className="flex-grow max-w-7xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/dropshipping" element={<DropshippingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </PrivateRoute>
              } />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

            <Route
              path="/box"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <BoxPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
