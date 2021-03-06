import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import * as fromCore from '../../state/reducers/index';
import * as layout from '../../state/actions/layout';
import { MenuItem } from '../../model/menuItem.model';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
  <div class="layout-container">
    <mat-toolbar color="primary" class="layout-toolbar"
    >
      <button mat-icon-button (click)="snav.toggle()"><mat-icon>menu</mat-icon></button>
      <h1 class="layout-app-name">Responsive App</h1>
    </mat-toolbar>
    <mat-sidenav-container class="layout-sidenav-container">
      <mat-sidenav #snav [mode]="'side'"
        fixedTopGap="56"
      >
        <mat-nav-list>
          <a mat-list-item routerLink="{{nav.url}}" *ngFor="let nav of (menuItems|async)">
            <mat-icon>{{nav.icon}}</mat-icon>{{nav.title}}
          </a>
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

  menuItems: Observable<MenuItem[]>;
  isMobileView: Observable<boolean>;

  constructor(private store: Store<fromCore.State>) {
    this.menuItems = store.pipe(select(fromCore.getMenuItems));
    this.isMobileView = store.pipe(select(fromCore.getIsMobileView));
  }

  ngOnInit() {
  }
}
