import { Vue, Component } from 'nuxt-property-decorator';

@Component
class Contact extends Vue {
  page: String = 'contact';
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

export default Contact;
