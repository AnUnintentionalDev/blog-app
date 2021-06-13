import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageTitles } from 'src/app/config/page-title';
import { GlobalLoaderService } from '../../services/global-loader/global-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showLoader: boolean = false;

  allRxJsSubscriptions: Array<Subscription> = [];

  constructor(
    private router: Router,
    private _titleService: Title,
    private _globalLoaderService: GlobalLoaderService
  ) { }

  ngOnInit() {
    const globalLoaderServSubs = this._globalLoaderService.loaderVisibility$.subscribe((res: boolean) => {
      this.showLoader = res;
    });

    const routerEventsSubs = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this._globalLoaderService.showLoader();
      }

      if (event instanceof NavigationEnd) {
        this._globalLoaderService.hideLoader();

        let title = PageTitles.filter(title => {
          const match = event.url.match(title.regex);
          if (match && match.length > 0) {
            return true;
          }

          return false;
        })[0].value;

        if (title) {
          title = ' - ' + title;
        }

        this._titleService.setTitle(`WeBlog App ${title}`);

      }
    });

    this.allRxJsSubscriptions.push(globalLoaderServSubs, routerEventsSubs);
  }

  ngOnDestroy() {
    this.allRxJsSubscriptions.forEach(subsc => subsc.unsubscribe());
  }
}
