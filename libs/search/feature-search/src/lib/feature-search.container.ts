import { ChangeDetectionStrategy, Component } from '@angular/core';
import { searchDataAccess } from '@esoft7s/search/data-access';

@Component({
  selector: 'esoft7s-feature-search',
  templateUrl: './feature-search.container.html',
  styleUrls: ['./feature-search.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSearchContainer {
  constructor() {
    console.log(searchDataAccess());
  }
}
