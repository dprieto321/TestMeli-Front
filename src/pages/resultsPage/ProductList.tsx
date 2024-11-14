import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { IProduct, ProductListProps } from "../../interfaces";

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
