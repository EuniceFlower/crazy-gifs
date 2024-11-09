import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-list',
  template: `
  <section class="row">
    <app-gifs-card class="col-md-3 col-sm-6" *ngFor="let item of gifList" [gif]='item'></app-gifs-card>
  </section>
  `,
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {

  @Input()
  public gifList: Gif[] = [];

}
