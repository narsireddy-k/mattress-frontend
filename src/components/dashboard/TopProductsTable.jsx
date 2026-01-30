import { topRecommendedProducts } from "../../utils/dashboardDemoData";

export default function TopProductsTable() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Top Recommended Products
      </h2>

      <div className="overflow-x-auto bg-white border rounded-xl">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-sm text-gray-600">
            <tr>
              <th className="p-3">Mattress Model</th>
              <th className="p-3">Times Recommended</th>
              <th className="p-3">Conversion %</th>
            </tr>
          </thead>
          <tbody>
            {topRecommendedProducts.map((item) => (
              <tr key={item.model} className="border-t">
                <td className="p-3">{item.model}</td>
                <td className="p-3">{item.recommended}</td>
                <td className="p-3 font-medium">{item.conversion}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
