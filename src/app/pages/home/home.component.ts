import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputSearch: String = '';

  constructor(private marvel: MarvelService) { }

  ngOnInit() {
  }

  searchCharacter() {
    this.marvel.searchCharacter(this.inputSearch)
  }

}
