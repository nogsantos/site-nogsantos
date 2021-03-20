import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  head() {
    return {
      title: 'Fabricio Nogueira',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Programador | Python | Javascript | DevOps'
        }
      ]
    };
  }
})
class Index extends Vue {
  page: string = 'index';
  title: string = '';
  content: string = '';

  head() {
    return {
      title: this.title
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
