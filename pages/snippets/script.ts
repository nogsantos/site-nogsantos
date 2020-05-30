import { Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import snippets from '~/contents/snippets';

import Content from '@/pages/Classes/Content';

@Component({
  components: {
    'fn-cover': Cover
  },
  head() {
    return {
      title: 'Fabricio Nogueira | Snippets',
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
export default class Snippets extends Content {
  async fetch() {
    return await Promise.all(
      snippets.map((content) => this.asyncImport('snippets', content))
    )
      .then((snippets) => (this.contents = snippets))
      .finally(() => (this.loading = false));
  }
}
