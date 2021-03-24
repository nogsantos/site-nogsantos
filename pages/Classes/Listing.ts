import { Vue } from 'nuxt-property-decorator';

export default class Listing extends Vue {
  contents: Array<string> = [];
  loading: boolean = true;

  async asyncImport(category: string, contentFile: string) {
    const content = await import(`@/contents/${category}/${contentFile}.md`);
    return content.attributes;
  }

  async fetch(items: Array<string>, page: string) {
    return await Promise.all(
      items.map((content) => this.asyncImport(page, content))
    )
      .then((post) => (this.contents = post))
      .finally(() => (this.loading = false));
  }
}
