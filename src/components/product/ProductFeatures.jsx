export default function ProductFeatures({ product }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Why you’ll love it</h2>

      <ul className="space-y-2 text-gray-700">
        <li>🛏 Firmness: {product.comfort.firmness_level}</li>
        <li>❄ Cooling: {product.health_features.cooling_feature}</li>
        <li>🦴 Back support: {product.health_features.back_pain_support}</li>
        <li>🧍 Sleep positions: {product.suitability.sleep_positions.join(", ")}</li>
      </ul>
    </div>
  );
}
