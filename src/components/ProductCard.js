import React from "react";
function ProductCard({ product }) {
  const jacketCoverImage =
    product.images && product.images.find(image => image.type === 1);

  return (
    <div className="product-card" data-testid="product-card">
      {jacketCoverImage && jacketCoverImage.uri && (
        <img src={jacketCoverImage.uri} alt="Jacket Cover" data-testid="jacket-cover-image"/>
      )}
      <h2>{product.name}</h2>
      <p>Author: {product.author}</p>
      <p>Genre: {product.category}</p>
    </div>
  );
}

export default ProductCard;
