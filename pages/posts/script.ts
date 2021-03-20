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
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  fetch() {
    return Promise.all(
      posts.map((content) => this.asyncImport('posts', content))
    )
      .then((post) => (this.contents = post))
      .finally(() => (this.loading = false));
  }
}
