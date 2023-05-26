import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiNavbarModule } from '@esoft7s/main/ui-navbar';
import { UiPlayerModule } from '@esoft7s/main/ui-player';
import { UiContentModule } from '@esoft7s/main/ui-content';
import { featureShellRoutes } from './feature-shell.routes';
import { FeatureShellContainer } from './feature-shell.container';

@NgModule({
  imports: [
    CommonModule,
    UiNavbarModule,
    UiPlayerModule,
    UiContentModule,
    RouterModule.forChild(featureShellRoutes),
  ],
  declarations: [FeatureShellContainer],
})
export class FeatureShellModule {}
