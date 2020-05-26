import { Vue, Component } from 'nuxt-property-decorator';
import { Link } from '@/components/index';

@Component({
  components: {
    'fn-link': Link
  }
})
export default class PortfolioItem extends Vue {
  params: any = '';
  name: String = '';
  title: String = '';
  content: String = '';
  excerpt: String = '';
  tags: Array<String> = [];

  head() {
    return {
      title: `Fabricio Nogueira - Post - ${this.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.excerpt
        }
      ]
    };
  }

  async fetch() {
    const { html, attributes } = await import(
      `@/contents/posts/${this.$route.params.slug}.md`
    );
    this.name = this.$route.params.slug;
    this.content = html;
    this.title = attributes.title;
    this.tags = attributes.tags;
    this.excerpt = attributes.excerpt;
  }
}
