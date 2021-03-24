import { Component } from 'nuxt-property-decorator';
import { Content } from '@/components/index';
import { Slug } from '@/pages/Classes/Content';

@Component({
  components: {
    'fn-content': Content,
  },
})
export default class PostsSlug extends Slug {
  head() {
    return this.defaultHead('Post');
  }

  created(): void {
    this.load('posts');
  }
}
