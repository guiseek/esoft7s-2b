import { ajax } from 'rxjs/ajax';
import { Http } from '../ports/http';
import { map } from 'rxjs';

export class RxJSHttpImpl extends Http {
  request<R = unknown, D = void>(method: string, url: string, body?: D) {
    return ajax<R>({ url, method, body })
      .pipe(map((res) => res.response));
  }
}
