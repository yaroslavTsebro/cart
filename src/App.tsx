import React, { useEffect, useState } from "react";
import "./App.scss";
import { getProductsByLimit } from "./http/product-api";
import { Product } from "./types/product";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Shop } from "./pages/Shop/Shop";

function App() {
  return <Shop />;
}

export default App;
