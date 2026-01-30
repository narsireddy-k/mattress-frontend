import { qualitySignals } from "../../utils/dashboardDemoData";

export default function QualitySignals() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Quality Signal
      </h2>

      <div className="bg-white border rounded-xl p-4">
        <p className="text-sm text-gray-500">
          Return Rate for Recommended Orders
        </p>
        <p className="text-2xl font-semibold mt-1">
          {qualitySignals.recommendedReturnRate}
        </p>
      </div>
    </section>
  );
}
