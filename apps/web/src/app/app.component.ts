import { Component } from '@angular/core';
import { ProductFacade } from '@esoft7s/shared/data-access';

@Component({
  selector: 'esoft7s-root',
  template: `
    <pre>
      {{ facade.products$ | async | json }}
    </pre>
  `,
  styleUrls: ['./app.styles.scss'],
})
export class AppComponent {
  title = 'web';

  constructor(
    readonly facade: ProductFacade
  ) {
    this.facade.loadProducts()
  }
}
