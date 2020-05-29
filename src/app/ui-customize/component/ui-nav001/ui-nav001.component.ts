import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui-nav001',
  templateUrl: './ui-nav001.component.html',
  styleUrls: ['./ui-nav001.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiNav001Component implements OnInit {

  constructor() { }
  public isOpen: boolean = false;
  ngOnInit() {
  }
  handelHambuger(){
    this.isOpen=!this.isOpen;
  }
}
