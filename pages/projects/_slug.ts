import { Component } from 'nuxt-property-decorator';
import { Content } from '@/components/index';

import ContentSlug from '@/pages/Classes/ContentSlug';

@Component({
  components: {
    'fn-content': Content
  }
})
export default class SnippetsSlug extends ContentSlug {
  head() {
    return this.defaultHead('Projeto');
  }

  fetch() {
    this.load('projects');
  }
}
