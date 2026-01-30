import { useNavigate } from "react-router-dom";

export default function AccessoryCard({ accessory }) {
  const navigate = useNavigate();
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition">
      {/* Image */}
      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
        <span className="text-gray-400 text-sm">
          No Image
        </span>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {accessory.product_type}
        </p>

        <h3 className="text-sm font-semibold text-gray-900">
          {accessory.model_name}
        </h3>

        <p className="text-sm text-gray-600">
          {accessory.brand_name}
        </p>

        {/* Price */}
        {accessory.price && (
          <p className="text-sm font-medium text-gray-900 mt-2">
            {accessory.price.min} – {accessory.price.max} {accessory.price.currency}
          </p>
        )}
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate(`/products/${accessory.product_id}`)}
        className="mt-4 w-full text-sm py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
      >
        View details
      </button>
    </div>
  );
}
