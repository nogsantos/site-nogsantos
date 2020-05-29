import { Vue, Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import posts from '@/contents/posts';

@Component({
  components: {
    'fn-cover': Cover
  },
  head() {
    return {
      title: 'Posts - Fabricio Nogueira',
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
export default class Posts extends Vue {
  posts: Array<String> = [];
  loading: boolean = true;

  async asyncImport(post: String) {
    const content = await import(`~/contents/posts/${post}.md`);
    return content.attributes;
  }

  async fetch() {
    return await Promise.all(posts.map((content) => this.asyncImport(content)))
      .then((posts) => (this.posts = posts))
      .finally(() => (this.loading = false));
  }
}
