import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureCollectionRoutes } from './feature-collection.routes';
import { FeatureCollectionContainer } from './feature-collection.container';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureCollectionRoutes),
  ],
  declarations: [FeatureCollectionContainer],
})
export class FeatureCollectionModule {}
