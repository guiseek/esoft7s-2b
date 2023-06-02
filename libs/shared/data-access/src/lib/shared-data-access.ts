import { ProductFacade } from './application/product.facade';
import { FetchHttpImpl } from './infrastructure/fetch-http.impl';
import { ProductRepositoryImpl } from './infrastructure/product.repository.impl';
import { RxJSHttpImpl } from './infrastructure/rxjs-http.impl';
import { Http } from './ports/http';
import { ProductRepository } from './ports/product.repository';

export function sharedDataAccess() {
  return {
    name: 'shared-data-access',
    infrastructure: [
      {
        for: Http,
        use: RxJSHttpImpl,
      },
      {
        for: ProductRepository,
        use: ProductRepositoryImpl,
        add: [Http]
      }
    ],
    application: [
      {
        for: ProductFacade,
        add: [ProductRepository]
      }
    ]
  };
}
