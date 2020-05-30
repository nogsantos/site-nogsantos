import { Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import posts from '@/contents/posts';

import Content from '@/pages/Classes/Content';

@Component({
  components: {
    'fn-cover': Cover
  },
  head() {
    return {
      title: 'Fabricio Nogueira | Posts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Posts'
        }
      ]
    };
  }
})
export default class Posts extends Content {
  async fetch() {
    return await Promise.all(
      posts.map((content) => this.asyncImport('posts', content))
    )
      .then((posts) => (this.contents = posts))
      .finally(() => (this.loading = false));
  }
}
