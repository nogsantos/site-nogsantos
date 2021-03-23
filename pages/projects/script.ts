import { Component } from 'nuxt-property-decorator';
import { Cover } from '@/components/';
import projects from '~/contents/projects';

import Content from '@/pages/Classes/Content';

@Component({
  components: {
    'fn-cover': Cover
  },
  head() {
    return {
      title: 'Fabricio Nogueira | Projetos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projetos e trabalhos em progresso'
        }
      ]
    };
  }
})
export default class Projects extends Content {
  created(): void {
    this.fetch(projects, 'projects');
  } 
}
