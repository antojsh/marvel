import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  inputSearch: String = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchCharacter() {
    console.log('SUBMIT')
    this.router.navigateByUrl(`/search?nameStartsWith=${this.inputSearch}&limit=10&offset=0?`)
  }

}
