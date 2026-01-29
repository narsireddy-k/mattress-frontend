import api from "./api";

export async function getProducts(params = {}) {
    const response = await api.get("/products", {
        params,
    });
    return response.data;
}

export async function getProductById(productId) {
  const res = await api.get(`/products/${productId}`);
  return res.data;
}