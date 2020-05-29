import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public bannerList = [
    {
      "img": "assets/img/img01.jpg"
    },
    {
      "img": "assets/img/img02.jpg"
    },
    {
      "img": "assets/img/img03.jpg"
    },
    {
      "img": "assets/img/img04.jpg"
    }
  ];
  ngOnInit() {
    
  }

}
