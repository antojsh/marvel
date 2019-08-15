import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.component.html',
  styleUrls: ['./comics-page.component.scss']
})
export class ComicsPageComponent implements OnInit {
  comics: any = []
  constructor(private marvel: MarvelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.marvel.getComicsOfCharacter(this.route.snapshot.params.idCharacter).subscribe(Response => {
      this.comics = Response.data.results
    })
  }

}
