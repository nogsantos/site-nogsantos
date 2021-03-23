import { Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import posts from '@/contents/posts';

import Content from '@/pages/Classes/Content';

@Component({
  components: {
    'fn-cover': Cover,
  },
  head() {
    return {
      title: 'Fabricio Nogueira | Posts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Posts',
        },
      ],
    };
  },
})
export default class Posts extends Content {
  created(): void {
    this.fetch(posts, 'posts');
  }
}
