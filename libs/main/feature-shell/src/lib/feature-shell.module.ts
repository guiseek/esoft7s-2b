import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureShellRoutes } from './feature-shell.routes';
import { FeatureShellContainer } from './feature-shell.container';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureShellRoutes)],
  declarations: [FeatureShellContainer],
})
export class FeatureShellModule {}
