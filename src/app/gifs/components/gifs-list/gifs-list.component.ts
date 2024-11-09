import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-list',
  template: `
  <section class="row">
    <div *ngFor="let item of gifList" class="col-md-3 col-sm-6">
      <div class="card mb-2 text-center bg-black">
        <!-- Crear imagen de gif -->
         <img [src]="item.images.downsized_medium.url" [alt]="item.title">

        <div class="card-body text-white">
          <p class="card-text">
            {{item.title}}
          </p>
        </div>
      </div>
    </div>
  </section>
  `,
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {

  @Input()
  public gifList: Gif[] = [];

}
