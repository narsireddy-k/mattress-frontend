import api from "./api";

export async function fetchQuestions() {
  const response = await api.get("/questions");
  return response.data.questions;
}
