import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiNavbarModule } from '@esoft7s/main/ui-navbar';
import { featureShellRoutes } from './feature-shell.routes';
import { FeatureShellContainer } from './feature-shell.container';

@NgModule({
  imports: [
    CommonModule,
    UiNavbarModule,
    RouterModule.forChild(featureShellRoutes),
  ],
  declarations: [FeatureShellContainer],
})
export class FeatureShellModule {}
