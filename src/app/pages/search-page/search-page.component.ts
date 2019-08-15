import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  loaded: boolean = false;
  charactersResult: any[] = []
  charactersResponse: any;
  params: any;
  constructor(public marvel: MarvelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.params = params;
      this.getCharacters(params)
      console.log(params)
    })
  }

  getCharacters(params) {
    this.loaded = false;
    this.marvel.getCharacter(this.buildParams(params)).subscribe(Response => {
      this.charactersResponse = Response;
      this.charactersResult = Response.data.results;
      this.loaded = true;
    }, err => {
      this.charactersResult = [];
      this.loaded = true;
    })
  }

  buildUrlPaginator(page) {
    let params = {
      ...this.params,
      offset: page == 0 ? 0 : page * this.params.limit
    }
    return `/search?${this.buildParams(params)}`
  }

  get next() {
    let params = {
      ...this.params,
      offset: parseInt(this.params.offset) + parseInt(this.params.limit)
    }
    return `/search?${this.buildParams(params)}`
  }

  get back() {
    let params = {
      ...this.params,
      offset: parseInt(this.params.offset) - parseInt(this.params.limit)
    }
    return `/search?${this.buildParams(params)}`
  }

  get getTotalPages() {

    return this.charactersResponse ? new Array(Math.ceil(this.charactersResponse.data.total / this.charactersResponse.data.limit)) : []
  }

  private buildParams(data) {
    return Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
  }
}
