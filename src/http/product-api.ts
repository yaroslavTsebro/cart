import { Product } from "../types/product";
import { host } from "./index";

export const getProductsByLimit = async (limit: number): Promise<Product[]> => {
  const response = await host.get<Product[]>(`/products?limit=${limit}`);
  return response.data;
};
