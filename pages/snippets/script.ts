import { Vue, Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import snippets from '~/contents/snippets';

@Component({
  components: {
    'fn-cover': Cover
  },
  head() {
    return {
      title: 'Snippets - Fabricio Nogueira',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Code snippets'
        }
      ]
    };
  }
})
export default class Snippets extends Vue {
  snippets: Array<String> = [];
  loading: boolean = true;

  async asyncImport(snippet: String) {
    const content = await import(`~/contents/snippets/${snippet}.md`);
    return content.attributes;
  }

  async fetch() {
    return await Promise.all(
      snippets.map((content) => this.asyncImport(content))
    )
      .then((snippets) => (this.snippets = snippets))
      .finally(() => (this.loading = false));
  }
}
