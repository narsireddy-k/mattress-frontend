import { preferenceInsights } from "../../utils/dashboardDemoData";

export default function PreferenceInsights() {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Customer Preference Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {preferenceInsights.map((item) => (
          <div
            key={item.label}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
            <p className="text-xl font-semibold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-6 italic">
        "This data can influence product strategy."
      </p>
    </section>
  );
}