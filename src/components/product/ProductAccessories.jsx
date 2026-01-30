import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.service";
import AccessoryCard from "./AccessoryCard";

export default function ProductAccessories({ product }) {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAccessories() {
      try {
        const response = await getProducts();
        const allProducts = response.products || [];

        const filtered = allProducts.filter(p =>
          p.product_type !== "Mattress" &&
          p.audience === product.audience &&
          p.brand_name === product.brand_name
        );

        setAccessories(filtered.slice(0, 4));
        console.log("Accessories:", filtered);
      } catch (err) {
        console.error("Failed to load accessories", err);
      } finally {
        setLoading(false);
      }
    }

    loadAccessories();
  }, [product]);

  if (loading || accessories.length === 0) return null;

  return (
    <section className="pt-12 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Recommended Accessories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {accessories.map(item => (
          <AccessoryCard
            key={item.product_id}
            accessory={item}
          />
        ))}
      </div>
    </section>
  );
}
