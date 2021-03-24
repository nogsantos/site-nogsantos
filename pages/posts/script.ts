import { Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import { Listing } from '@/pages/Classes/Content';
import posts from '@/contents/posts';

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
export default class Posts extends Listing {
  created(): void {
    this.fetch(posts, 'posts');
  }
}
