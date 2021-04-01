import { Component, OnInit } from '@angular/core';
import { MenuLink } from './config/menu-link';
import { MenuLinkService } from './services/menu-link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Blog Application Assignment';

  navigationConfig: MenuLink[];

  constructor(
    private _menuLinkService: MenuLinkService
  ) { }

  ngOnInit() {
    this._menuLinkService.getMenuLinks().subscribe((res: MenuLink[]) => {
      this.navigationConfig = res;
    });
  }
}
