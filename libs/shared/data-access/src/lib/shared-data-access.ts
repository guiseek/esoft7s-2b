import { FetchHttpImpl } from './infrastructure/fetch-http.impl';
import { Http } from './ports/http';

export function sharedDataAccess() {
  return {
    name: 'shared-data-access',
    infrastructure: [
      {
        for: Http,
        use: FetchHttpImpl,
      },
    ],
  };
}
