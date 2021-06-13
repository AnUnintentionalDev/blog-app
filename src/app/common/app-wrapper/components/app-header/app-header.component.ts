import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output('sideNavDrawerEmitter')
  sideNavDrawerEventEmitter = new EventEmitter<boolean>();

  title: string = 'WeBlog App';

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sideNavDrawerEventEmitter.next(true);
  }
}
