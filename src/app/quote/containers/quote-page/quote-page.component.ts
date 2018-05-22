import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quote-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./quote-page.component.scss'],
  template: `
    <app-quote-list></app-quote-list>
  `
})
export class QuotePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
