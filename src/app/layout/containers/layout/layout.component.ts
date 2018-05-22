import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `
})
export class LayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
