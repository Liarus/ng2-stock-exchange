import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
  <div class="layout-container">
    <mat-toolbar color="primary" class="layout-toolbar"
    >
      <button  (click)="snav.toggle()">Menu</button>
      <h1 class="layout-app-name">Responsive App</h1>
    </mat-toolbar>
    <mat-sidenav-container class="layout-sidenav-container">
      <mat-sidenav #snav [mode]="'side'"
        fixedTopGap="56"
      >
        <mat-nav-list>
          <a mat-list-item routerLink="{{nav.link}}" *ngFor="let nav of navItems">{{nav.name}}</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
  `
})
export class LayoutComponent implements OnInit {

  navItems = [
    { name: 'test', link: '.'},
    { name: 'quotes', link: './app-quotes'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
