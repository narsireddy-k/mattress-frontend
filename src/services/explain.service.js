import api from "./api";

export async function explainRecommendation(payload) {
  const res = await api.post("/explain-recommendation", payload);
  return res.data;
}
