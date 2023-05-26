import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPlayerComponent } from './ui-player.component';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UiPlayerComponent, TimePipe],
  exports: [UiPlayerComponent, TimePipe],
})
export class UiPlayerModule {}
