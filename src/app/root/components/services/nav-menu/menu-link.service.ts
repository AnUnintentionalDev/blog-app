import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuLink } from '../../../../config/menu-link';

@Injectable({
  providedIn: 'root'
})
export class MenuLinkService {

  readonly menuLinks: MenuLink[] = [
    {
      name: 'Home',
      pageName: 'Home Page | Blog App',
      hasIcon: true,
      icon: 'home',
      url: '/home',
    },
    {
      name: 'About',
      pageName: 'About Us | Blog App',
      hasIcon: true,
      icon: 'info',
      url: '/about',
    },
    {
      name: 'Post a blog',
      pageName: 'Create Blog | Blog App',
      hasIcon: true,
      icon: 'create',
      url: '/create',
    },
    {
      name: 'All Blogs',
      pageName: 'All Blogs | Blog App',
      hasIcon: true,
      icon: 'remove_red_eye',
      url: '/all-blogs',
    },
    {
      name: 'Connect with Us',
      pageName: 'Connect with Us | Blog App',
      hasIcon: true,
      icon: 'connect_without_contact',
      url: '/connect-with-us',
    },
    {
      name: 'Contact Us',
      pageName: 'Contact Us | Blog App',
      hasIcon: true,
      icon: 'contact_page',
      url: '/contact-us',
    }];

  constructor() { }

  getMenuLinks(): Observable<MenuLink[]> {
    return of(this.menuLinks);
  }
}
