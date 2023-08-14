import "./App.css";
import React, { useState } from "react";
import catalog from "./data/catalog.json";
import ProductCard from "./components/ProductCard";

function App() {
  const [products] = useState(catalog.products);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <h1>Lauren's Catalog Viewer</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {}
      </div>
      <div className="product-list">
        {products
          .filter(
            (product) =>
              (product.name &&
                product.name
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())) ||
              (product.author &&
                product.author
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()))
          )
          .map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
      </div>
    </div>
  );
}

export default App;
