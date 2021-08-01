import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautifyBlogPostTagPipe } from './pipes/beautify-blog-post-tag.pipe';



@NgModule({
  declarations: [BeautifyBlogPostTagPipe],
  imports: [
    CommonModule
  ],
  exports: [BeautifyBlogPostTagPipe]
})
export class BlogPostTagPipeModule { }
