import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromCore from './core/state/reducers/index';
import * as layout from './core/state/actions/layout';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private store: Store<fromCore.State>) {
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.store.dispatch(new layout.ResizeWndow(
      {
        width: event.target.innerWidth,
        height: event.target.innerHeight
      })
    );
  }
}
