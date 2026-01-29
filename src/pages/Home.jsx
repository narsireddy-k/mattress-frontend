import HeroSection from "../components/hero/HeroSection";
import RecommendationList from "../components/recommendations/RecommendationList";
import { useChat } from "../contexts/ChatContext";

export default function Home() {
  const { openChat } = useChat();

  return (
    <>
      <HeroSection onStart={openChat} />
      <RecommendationList />
    </>
  );
}