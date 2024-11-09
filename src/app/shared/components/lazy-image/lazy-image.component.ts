import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  template: `
    <div class="d-flex justify-content-center mt-3">
      <img
      src="./assets/puff.svg"
      width="40" height="40"
      alt="" srcset=""
      *ngIf="!hasLoad"
      >
      <img [ngStyle]="{display: hasLoad ? '' : 'none'}"
      (load)="onLoad()"
      width="250" height="250"
      [src]="url" [alt]="alt"
      class="animate__animated animate__fadeIn">
    </div>

  `
})
export class LazyImageComponent {

  public hasLoad: boolean = false;

  @Input()
  public url: string = '';

  @Input()
  public alt: string = '';

  onLoad() {
    setTimeout(() => {
      this.hasLoad = true;
    }, 1000);
  }

}
