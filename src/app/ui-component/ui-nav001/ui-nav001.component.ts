import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-nav001',
  templateUrl: './ui-nav001.component.html',
  styleUrls: ['./ui-nav001.component.scss']
})
export class UiNav001Component implements OnInit {

  public isOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }
handelHambuger(){
  this.isOpen=!this.isOpen;
}
}
