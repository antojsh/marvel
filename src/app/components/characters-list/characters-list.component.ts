import { Component, OnInit, Input } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service'
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  @Input('characters') characters;
  constructor(private marvel : MarvelService) { }

  ngOnInit() {

  }

}
