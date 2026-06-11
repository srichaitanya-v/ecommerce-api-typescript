import { fetchProducts } from "../repositories/product.repository";

export const getAllProducts = () => {
  return fetchProducts();
};
