import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureSearchRoutes } from './feature-search.routes';
import { FeatureSearchContainer } from './feature-search.container';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureSearchRoutes),
  ],
  declarations: [FeatureSearchContainer],
})
export class FeatureSearchModule {}
