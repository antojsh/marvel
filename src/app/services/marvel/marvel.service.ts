import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from '../../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpService, private router: Router) { }

  getCharacter(params) {
    return this.http.get(`/characters?ts=1&apikey=${environment.marvelApi.publicKey}&hash=${environment.marvelApi.hash}&${params}`)
  }

  getComicsOfCharacter(idCharacter) {
    return this.http.get(`/characters/${idCharacter}/comics?ts=1&apikey=${environment.marvelApi.publicKey}&hash=${environment.marvelApi.hash}`)
  }

  getComicsTitle(comics) {
    comics.length = comics.length > 4 ? 4 : comics.length;
    return comics;
  }



  searchCharacter(text) {
    this.router.navigateByUrl(`/search?nameStartsWith=${text}&limit=10&offset=0?`)
  }

}
