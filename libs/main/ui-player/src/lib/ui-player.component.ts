import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'esoft7s-ui-player',
  templateUrl: './ui-player.component.html',
  styleUrls: ['./ui-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPlayerComponent {
  @ViewChild('audioRef')
  audioRef!: ElementRef<HTMLAudioElement>;
  get audioEl() {
    return this.audioRef.nativeElement;
  }

  #paused = new BehaviorSubject(true);
  paused$ = this.#paused.asObservable();

  #muted = new BehaviorSubject(false);
  muted$ = this.#muted.asObservable();

  play() {
    if (this.audioEl.paused) {
      this.audioEl.play();
    } else {
      this.audioEl.pause();
    }

    this.#paused.next(this.audioEl.paused);
  }

  mute() {
    this.audioEl.muted = !this.audioEl.muted;

    this.#muted.next(this.audioEl.muted);
  }
}
