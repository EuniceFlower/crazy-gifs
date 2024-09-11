import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <input type="text"
  class="form-control"
  placeholder="Search gifs..." name="" id="" #textTagInput
  (keyup.enter)="searchTag()">
  `,
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('textTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  searchTag() {
    const newText = this.tagInput.nativeElement.value;
    console.log({newText});
  }

}
