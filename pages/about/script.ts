import { Vue, Component } from 'nuxt-property-decorator';

@Component
class About extends Vue {
  page: String = 'about';
  title: String = '';
  content: String = '';

  head() {
    return {
      title: `Fabricio Nogueira | ${this.title}`
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

export default About;
