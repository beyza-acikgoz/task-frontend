import React, { useState } from "react";
import ReactDOM from "react-dom";

import CartPopover from "./components/CartPopover"; // yolunu kendi dosya yapına göre ayarla
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const sampleCart = [
  {
    product: {
      id: 1,
      title: "Ürün 1",
      price: 100,
      image: "https://via.placeholder.com/48",
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      title: "Ürün 2",
      price: 200,
      image: "https://via.placeholder.com/48",
    },
    quantity: 1,
  },
];

const App = () => {
  const [cart, setCart] = useState(sampleCart);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };


  return (
    <BrowserRouter>
       <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Sepeti Göster
      </button>

    </div> 
    </BrowserRouter>

  );
};

ReactDOM.render(<App />, document.getElementById("app"));
