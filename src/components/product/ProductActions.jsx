import { useState } from "react";
import { explainProduct } from "../../services/explain.service";
import OrderFlowModal from "../order/OrderFlowModal";

export default function ProductActions({ product }) {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [showOrderFlow, setShowOrderFlow] = useState(false);

  async function handleExplain() {
    setLoading(true);
    setExplanation(null);

    try {
      const res = await explainProduct(product);
      setExplanation(res.explanation);
    } catch (err) {
      console.error(err);
      setExplanation("Unable to explain this product right now 😕");
    } finally {
      setLoading(false);
    }
  }

  function handleBuyNow() {
    setShowOrderFlow(true);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <button
          onClick={handleBuyNow}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Buy Now
        </button>

        <button
          onClick={handleExplain}
          disabled={loading}
          className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg"
        >
          {loading ? "Explaining..." : "Explain with AI 🤖"}
        </button>
      </div>

      {explanation && (
        <div className="p-4 bg-gray-50 border rounded-lg text-sm leading-relaxed">
          {explanation}
        </div>
      )}

      {showOrderFlow && (
        <OrderFlowModal onClose={() => setShowOrderFlow(false)} />
      )}
    </div>
  );
}
