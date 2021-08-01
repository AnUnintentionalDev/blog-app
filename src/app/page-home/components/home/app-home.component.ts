import { Component, OnInit } from '@angular/core';
import { BlogPostModel } from 'src/app/common/models/blog-post.model';
import { AllBlogsService } from 'src/app/root/services/fetch-all-blogs/all-blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  allBlogPostsData: Array<BlogPostModel>;

  constructor(
    private allBlogsService: AllBlogsService
  ) { }

  ngOnInit(): void {
    this.allBlogsService.fetchAllBlogPostsData();
    this.allBlogsService.blogPostsData$.subscribe((res: Array<BlogPostModel>) => {
      this.allBlogPostsData = res;
    });
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
