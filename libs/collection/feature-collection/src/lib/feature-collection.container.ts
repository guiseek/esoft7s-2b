import { ChangeDetectionStrategy, Component } from '@angular/core';
import { collectionDataAccess } from '@esoft7s/collection/data-access';

@Component({
  selector: 'esoft7s-feature-collection',
  templateUrl: './feature-collection.container.html',
  styleUrls: ['./feature-collection.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCollectionContainer {
  constructor() {
    console.log(collectionDataAccess());
  }
}
