import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

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


  constructor( private giftService: GifsService) { }

  searchTag() {
    const newText = this.tagInput.nativeElement.value;

    this.giftService.searchTag(newText);
    this.tagInput.nativeElement.value = '';
  }

}
