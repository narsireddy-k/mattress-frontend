import { useState } from "react";
import { explainProduct } from "../../services/explain.service";
import OrderFlowModal from "../order/OrderFlowModal";
import ExplainModal from "./ExplainModal";

export default function ProductActions({ product }) {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState([]);
  const [showOrderFlow, setShowOrderFlow] = useState(false);
  const [showExplainModal, setShowExplainModal] = useState(false);

  async function handleExplain() {
    setLoading(true);
    setExplanation([]);
    setShowExplainModal(true);

    try {
      const res = await explainProduct(product);

      const parsedExplanation = res.explanation
        .split("\n")
        .map((line) => line.replace(/^-\s*/, "").trim())
        .filter((line) => line.length > 0);

      setExplanation(parsedExplanation);
    } catch (err) {
      console.error(err);
      setExplanation(["Unable to explain this product right now 😕"]);
    } finally {
      setLoading(false);
    }
  }

  function handleBuyNow() {
    setShowOrderFlow(true);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* 👇 RELATIVE CONTAINER IS CRITICAL */}
      <div className="flex gap-4 relative">
        <button
          onClick={handleBuyNow}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Buy Now
        </button>

        <button
          onClick={handleExplain}
          className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg"
        >
          Explain with AI 🤖
        </button>

        {/* 👇 Explain modal opens BESIDE the button */}
        {showExplainModal && (
          <ExplainModal
            explanation={explanation}
            loading={loading}
            onClose={() => setShowExplainModal(false)}
          />
        )}
      </div>

      {showOrderFlow && (
        <OrderFlowModal onClose={() => setShowOrderFlow(false)} />
      )}
    </div>
  );
}
