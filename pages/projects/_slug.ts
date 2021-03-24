import { Component } from 'nuxt-property-decorator';
import { Content } from '@/components/index';
import { Slug } from '@/pages/Classes/Content';

@Component({
  components: {
    'fn-content': Content,
  },
})
export default class SnippetsSlug extends Slug {
  head() {
    return this.defaultHead('Projeto');
  }

  created(): void {
    this.load('projects');
  }
}
