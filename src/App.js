import "./App.css";
import React, { useState } from "react";
import catalog from "./data/catalog.json";

function App() {
  const [products] = useState(catalog.products);

  return (
    <div className="App">
      <h1>Lauren's Catalog Viewer</h1>
      <div className="product-list">
        {products.map((product) => {
          const jacketCoverImage =
            product.images && product.images.find((image) => image.type === 1);
          return (
            <div key={product.sku} className="product-card">
              {jacketCoverImage && jacketCoverImage.uri && (
                <img src={jacketCoverImage.uri} alt="Jacket Cover" />
              )}
              <h2>{product.name}</h2>
              <p>Author: {product.author}</p>
              <p>Genre: {product.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
