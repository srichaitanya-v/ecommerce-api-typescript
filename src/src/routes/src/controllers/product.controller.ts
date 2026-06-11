import { getAllProducts } from "../services/product.service";

export const getProducts = (req: any, res: any) => {
  const products = getAllProducts();

  res.json(products);
};
