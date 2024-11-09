import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-card',
  template: `
      <div class="card mb-2 text-center bg-black">
        <!-- Crear imagen de gif -->
         <shared-lazy-image [alt]='gif.title' [url]='gif.images.downsized_medium.url'></shared-lazy-image>
        <div class="card-body text-white">
          <p class="card-text">
            {{gif.title || 'Shared...' }}
          </p>
        </div>
      </div>
  `,
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is necesary...')
  }


}
