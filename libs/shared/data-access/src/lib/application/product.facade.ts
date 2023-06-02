import { ProductRepository } from '../ports/product.repository';
import { Product } from '../entities/product';
import { Store } from '../ports/store';

interface ProductState {
  products: Product[];
}

export class ProductFacade extends Store<ProductState> {
  products$ = this.select((state) => state.products);

  constructor(
    private readonly repository: ProductRepository
  ) {
    super({
      products: [],
    });
  }

  loadProducts() {
    this.repository.findAll().subscribe(({ products }) => {
      this.setState({ products });
    });
  }
}
