import { Vue, Component } from 'nuxt-property-decorator';

@Component
class Index extends Vue {
  page: String = 'index';
  title: String = '';
  content: String = '';

  head() {
    return {
      title: `${this.title} - Home`
    };
  }

  async fetch() {
    const { html, attributes } = await import(
      `@/contents/pages/${this.page}.md`
    );
    this.title = attributes.title;
    this.content = html;
  }
}

export default Index;
