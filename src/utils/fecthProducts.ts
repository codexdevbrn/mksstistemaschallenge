import { ProductTypes } from '../@types/ProductTypes';
import { fetchWrapper } from "./fetchWrapper";

export interface ProductsResponse {
  products: Array<ProductTypes>;
  count: number;
}
/* Busca os produtos na API */
export function fetchProducts(page: number, options?: RequestInit) {
  return fetchWrapper<ProductsResponse>(
    `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC`,
    options,
  );
}
