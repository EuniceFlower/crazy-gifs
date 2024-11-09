import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private url: string = 'https://api.giphy.com/v1/gifs/search';
  private apiKey: string = 'qP8sbeXeC9lNhtY6kScfEH2tie60Dc6B';

  public gifElements: Gif[] = [];

  constructor( private http: HttpClient) {
    this.getLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private setLocalStorage() {
    localStorage.setItem('History', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage() {
    if (!localStorage.getItem('History')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('History')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if ( this._tagsHistory.includes(tag) ) {
     this._tagsHistory = this._tagsHistory.filter((data) => data !== tag );
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.setLocalStorage();
  }

  searchTag(tag: string): void {
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', tag)
    .set('limit', 20);

    if (tag.length === 0) return;
    this.organizeHistory(tag);
    this.http.get<SearchResponse>(`${this.url}`, { params })
    .subscribe((response) => {
      this.gifElements = response.data;
    });
  }


}
