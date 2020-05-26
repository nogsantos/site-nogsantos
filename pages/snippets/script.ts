import { Vue, Component } from 'nuxt-property-decorator';
import { Link } from '@/components/';
import snippets from '~/contents/snippets';

@Component({
  components: {
    'fn-link': Link
  },
  head() {
    return {
      title: `Fabricio Nogueira - Snippets`,
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

  async asyncImport(snippet: String) {
    const content = await import(`~/contents/snippets/${snippet}.md`);
    return content.attributes;
  }

  async fetch() {
    return await Promise.all(
      snippets.map((content) => this.asyncImport(content))
    ).then((snippets) => {
      this.snippets = snippets;
    });
  }
}
