import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { getProductsByLimit } from "../../http/product-api";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.scss";

export function ProductList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    getProductsByLimit(20).then((result) => setData(result));
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">Loading</div>
      ) : (
        <div className="product_list">
          {data.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </>
  );
}
