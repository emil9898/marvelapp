import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/marvel.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(public marvel:MarvelService) { }

  ngOnInit(): void {
    console.log("hola")
    this.marvel.comics().subscribe(response => {console.log(response)})
  }

}
