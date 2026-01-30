import { useChat } from "../../contexts/ChatContext";
import RecommendationCard from "./RecommendationCard";

export default function RecommendationList() {
  const { recommendations } = useChat();

  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto mt-12 px-6 pb-24">
      <h2 className="text-xl font-semibold mb-6">
        Recommended for you
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((item) => (
          <RecommendationCard
            key={item.product.product_id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
