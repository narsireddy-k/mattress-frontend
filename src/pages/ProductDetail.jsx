import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/products.service";

import ProductHero from "../components/product/ProductHero";
import ProductSpecs from "../components/product/ProductSpecs";
import ProductFeatures from "../components/product/ProductFeatures";
import ProductActions from "../components/product/ProductActions";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (err) {
        console.error("Product not found");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!product) return <div className="p-8">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <ProductHero product={product} />
      <ProductActions product={product} />
      <ProductSpecs product={product} />
      <ProductFeatures product={product} />
    </div>
  );
}
