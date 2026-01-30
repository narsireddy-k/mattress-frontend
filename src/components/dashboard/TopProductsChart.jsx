import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { topRecommendedProducts } from "../../utils/dashboardDemoData";

export default function TopProductsChart() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Top Recommended Products
        </h2>
        <p className="text-sm text-gray-500">
          Products most frequently surfaced by the recommendation engine
        </p>
      </div>

      <div className="bg-white border rounded-xl p-4 h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topRecommendedProducts}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
          >
            <XAxis type="number" />
            <YAxis
              type="category"
              dataKey="model"
              width={160}
            />
            <Tooltip
              formatter={(value, name, props) => {
                if (name === "recommended") {
                  return [`${value}`, "Times Recommended"];
                }
                return value;
              }}
              labelFormatter={(label, payload) =>
                `Conversion: ${payload?.[0]?.payload?.conversion}%`
              }
            />
            <Bar
              dataKey="recommended"
               fill="#2563EB"
              radius={[0, 6, 6, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
