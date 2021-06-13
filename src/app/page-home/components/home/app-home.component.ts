import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickKnowMore() {
    const knowMoreWrapper = document.getElementById('know-more-section');

    knowMoreWrapper.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
    });
  }

}
