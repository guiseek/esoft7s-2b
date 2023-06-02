import { Observable } from 'rxjs';
import { ProductResponse } from '../dtos/product-response';

export abstract class ProductRepository {
  abstract findAll(): Observable<ProductResponse>;
}
