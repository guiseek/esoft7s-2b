import { Product } from '../entities/product';

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
