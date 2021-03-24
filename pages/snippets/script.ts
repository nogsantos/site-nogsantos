import { Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import { Listing } from '@/pages/Classes/Content';
import snippets from '~/contents/snippets';

@Component({
  components: {
    'fn-cover': Cover,
  },
  head() {
    return {
      title: 'Fabricio Nogueira | Snippets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Code snippets',
        },
      ],
    };
  },
})
export default class Snippets extends Listing {
  created(): void {
    this.fetch(snippets, 'snippets');
  }
}
