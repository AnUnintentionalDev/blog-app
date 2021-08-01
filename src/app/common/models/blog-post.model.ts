export interface BlogPostModel {
  blogId: string,
  blogFeaturedImg: string,
  blogTitle: string,
  blogMessage: string,
  blogPostedDate: Date | string,
  blogTags: Array<string>
}