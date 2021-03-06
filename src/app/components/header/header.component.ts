import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  inputSearch: String = '';

  constructor(private marvel: MarvelService) { }

  ngOnInit() {
  }

  searchCharacter() {
    this.marvel.searchCharacter(this.inputSearch)
  }

}
