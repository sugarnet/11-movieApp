import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'https://api.themoviedb.org/3';
  apiKey = 'a98c424b5d15562dc1caf1293e82705a';

  constructor( private http: HttpClient ) { }

  getPopulares() {

    let url = `${ this.url }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
 
    return this.http.jsonp(url,'JSONP_CALLBACK');
  }
}
