import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiNavbarComponent],
  exports: [UiNavbarComponent],
})
export class UiNavbarModule {}
