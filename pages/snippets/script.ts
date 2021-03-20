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
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  fetch() {
    return Promise.all(
      snippets.map((content) => this.asyncImport('snippets', content))
    )
      .then((snippet) => (this.contents = snippet))
      .finally(() => (this.loading = false));
  }
}
