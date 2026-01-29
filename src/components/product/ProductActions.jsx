import { useState } from "react";
import { explainRecommendation } from "../../services/explain.service";

export default function ProductActions({ product, answers }) {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState(null);

  async function handleExplain() {
    setLoading(true);
    setExplanation(null);

    const payload = {
      product: [product],     // ✅ MUST BE ARRAY
      user_answers: answers || {},
    };

    console.log(
      "PRODUCT EXPLAIN PAYLOAD",
      JSON.stringify(payload, null, 2)
    );

    try {
      const res = await explainRecommendation(payload);
      setExplanation(res.explanation);
    } catch (err) {
      setExplanation("Unable to explain this product right now 😕");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
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
        <div className="p-4 bg-gray-50 border rounded-lg text-sm">
          {explanation}
        </div>
      )}
    </div>
  );
}
