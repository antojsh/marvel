import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit {
  @Input('comics') comics;
  constructor() { }

  ngOnInit() {
  }

}
