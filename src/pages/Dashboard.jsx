import FunnelMetrics from "../components/dashboard/FunnelMetrics";
import TopProductsTable from "../components/dashboard/TopProductsTable";
import PreferenceInsights from "../components/dashboard/PreferenceInsights";
import QualitySignals from "../components/dashboard/QualitySignals";
import TopProductsChart from "../components/dashboard/TopProductsChart";
 
export default function Dashboard() {
  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      <FunnelMetrics />
      <TopProductsChart />
      <PreferenceInsights />
      <QualitySignals />
    </div>
  );
}
 