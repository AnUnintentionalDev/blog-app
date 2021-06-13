import { Component, OnInit } from '@angular/core';
import { MenuLink } from 'src/app/config/menu-link';
import { MenuLinkService } from 'src/app/root/components/services/nav-menu/menu-link.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {

  title: string = 'WeBlog App';
  navigationConfig: MenuLink[];

  constructor(
    private _menuLinkService: MenuLinkService
  ) { }

  ngOnInit(): void {
    this._menuLinkService.getMenuLinks().subscribe((res: MenuLink[]) => {
      this.navigationConfig = res;
    });
  }

}
