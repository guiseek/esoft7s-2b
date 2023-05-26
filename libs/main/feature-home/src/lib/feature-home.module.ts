import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureHomeRoutes } from './feature-home.routes';
import { FeatureHomeContainer } from './feature-home.container';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureHomeRoutes),
  ],
  declarations: [FeatureHomeContainer],
})
export class FeatureHomeModule {}
