import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautifyBlogPostTag'
})
export class BeautifyBlogPostTagPipe implements PipeTransform {

  transform(tags: Array<string>, ...args: unknown[]): unknown {
    const transformedTags = tags.map((item: string) => {
      const tag = item.toUpperCase() + ', ';

      return tag;
    });

    return transformedTags;
  }

}
