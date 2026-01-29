import { useNavigate } from "react-router-dom";

export default function RecommendationCard({ item }) {
  const navigate = useNavigate();
  const { product, score } = item;

  return (
    <div className="border rounded-xl p-5 bg-blue-50 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          {product.model_name}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          Firmness: {product.comfort.firmness_level}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          Match Score: {score}
        </p>
      </div>

      <button
        onClick={() => navigate(`/products/${product.product_id}`)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
      >
        View Product
      </button>
    </div>
  );
}
