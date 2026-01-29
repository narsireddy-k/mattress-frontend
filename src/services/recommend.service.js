// import api from "./api";

// export async function getRecommendations(answers) {
//   const response = await api.post("/recommend", answers);
//   return response.data;
// }

import api from "./api";

export async function getRecommendations(answers) {
  // 🔥 send FLAT payload
  const response = await api.post("/recommend", answers);
  return response.data;
}
