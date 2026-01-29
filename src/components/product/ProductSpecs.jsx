export default function ProductSpecs({ product }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Specifications</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>Firmness</div>
        <div>{product.comfort.firmness_level}</div>

        <div>Warranty</div>
        <div>{product.warranty_years} years</div>

        <div>Durability</div>
        <div>{product.durability}</div>

        <div>Market</div>
        <div>{product.market}</div>
      </div>
    </div>
  );
}
