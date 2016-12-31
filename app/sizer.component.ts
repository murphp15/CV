import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-sizer',
  template: `
  <div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
  </div>`
})
export class SizerComponent {
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    // ok so it seems that it updates it in the local version.
    // but it does not propgate it to the parent without using the
    if(this.size%2==0){
      this.sizeChange.emit(this.size);
    }

  }
}
