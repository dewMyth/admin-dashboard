import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  isSidebarOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggler(){
    this.isSidebarOpened = !this.isSidebarOpened;
    console.log(this.isSidebarOpened);
  }

}
