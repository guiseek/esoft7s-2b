import { Component } from '@angular/core';
import { Http } from '@esoft7s/shared/data-access';

@Component({
  selector: 'esoft7s-root',
  template: `<router-outlet />`,
  styleUrls: ['./app.styles.scss'],
})
export class AppComponent {
  title = 'web';

  products$ = this.http.get(`https://dummyjson.com/products`);

  constructor(private readonly http: Http) {
    this.products$.subscribe(console.log)
  }
}
