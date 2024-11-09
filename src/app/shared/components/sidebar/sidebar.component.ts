import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private giftService: GifsService) {}

  get tagHistory() {
    return this.giftService.tagsHistory;
  }


  siderSearch(search: string): void {
    this.giftService.searchTag(search);

  }
}
