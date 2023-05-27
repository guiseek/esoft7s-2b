import { Observable, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Http } from '../ports/http';

export class FetchHttpImpl extends Http {
  request<R = unknown, D = void>(
    method: string,
    url: string,
    body?: D
  ): Observable<R> {
    return ajax<R>({ url, method, body })
      .pipe(map((res) => res.response));
  }
}
