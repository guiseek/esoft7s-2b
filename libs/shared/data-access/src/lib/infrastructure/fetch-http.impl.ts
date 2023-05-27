import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs';
import { Http } from '../ports/http';

export class FetchHttpImpl extends Http {
  request<R = unknown, D = void>(method: string, url: string, body?: D) {
    return ajax<R>({ url, method, body }).pipe(map((res) => res.response));
  }
}
