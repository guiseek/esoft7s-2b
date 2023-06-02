import { ProductRepository } from '../ports/product.repository';
import { ProductResponse } from '../dtos/product-response';
import { Http } from '../ports/http';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private http: Http) {}

  findAll() {
    const url = `https://dummyjson.com/products`;
    return this.http.get<ProductResponse>(url);
  }
}
