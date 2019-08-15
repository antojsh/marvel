import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpService) { }

  getCharacter(params) {
    console.log(params)
    return this.http.get(`/characters?ts=1&apikey=${environment.marvelApi.publicKey}&hash=${environment.marvelApi.hash}&${params}`)
  }


  getComicsTitle(comics) {
    comics.length = comics.length > 4 ? 4 : comics.length;
    return comics;
  }

}
