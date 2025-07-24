import ReactDOM from "react-dom";
import React from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { products } from './data/products';
import { ProductList } from "./components/ProductList";

const App = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
      <ProductList/>
      </main>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
