import { Vue, Component } from 'nuxt-property-decorator';
import { Link } from '@/components/';
import posts from '@/contents/posts';

@Component({
  components: {
    'fn-link': Link
  },
  head() {
    return {
      title: `Fabricio Nogueira - Posts`,
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
export default class Post extends Vue {
  posts: Array<String> = [];

  async asyncImport(post: String) {
    const content = await import(`~/contents/posts/${post}.md`);
    return content.attributes;
  }

  async fetch() {
    return await Promise.all(
      posts.map((content) => this.asyncImport(content))
    ).then((posts) => {
      this.posts = posts;
    });
  }
}
