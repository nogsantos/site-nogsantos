import { Component } from 'nuxt-property-decorator';
import { Content } from '@/components/index';

import ContentSlug from '@/pages/Classes/ContentSlug';

@Component({
  components: {
    'fn-content': Content
  }
})
export default class PostsSlug extends ContentSlug {
  head() {
    return this.defaultHead('Post');
  }

  fetch() {
    this.load('posts');
  }
}
