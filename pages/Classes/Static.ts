import { Vue } from 'nuxt-property-decorator';

export default class Static extends Vue {
  page: string = '';
  title: string = '';
  content: string = '';

  async fetch(page: string): Promise<void> {
    const { html, attributes } = await import(`@/contents/pages/${page}.md`);
    this.page = page;
    this.title = attributes.title;
    this.content = html;
  }
}
