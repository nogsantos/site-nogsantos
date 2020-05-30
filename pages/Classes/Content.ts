import { Vue } from 'nuxt-property-decorator';

export default class Content extends Vue {
  contents: Array<string> = [];
  loading: boolean = true;

  async asyncImport(category: string, contentFile: string) {
    const content = await import(`@/contents/${category}/${contentFile}.md`);
    return content.attributes;
  }
}
