import "./App.css";
import React, { useState } from "react";
import catalog from "./data/catalog.json";
import ProductCard from "./components/ProductCard";

function App() {
  const [products] = useState(catalog.products);

  return (
    <div className="App">
      <h1>Lauren's Catalog Viewer</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
