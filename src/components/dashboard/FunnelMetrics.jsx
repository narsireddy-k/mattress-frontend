import { funnelMetrics } from "../../utils/dashboardDemoData";
import FunnelStepCard from "./FunnelStepCard";

export default function FunnelMetrics() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Funnel Performance
        </h2>
        <p className="text-sm text-gray-500">
          User progression from discovery to purchase
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {funnelMetrics.map((step) => (
          <FunnelStepCard
            key={step.label}
            label={step.label}
            value={step.value}
          />
        ))}
      </div>
    </section>
  );
}
