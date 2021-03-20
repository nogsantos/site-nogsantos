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
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  fetch() {
    return Promise.all(
      projects.map((content) => this.asyncImport('projects', content))
    )
      .then((project) => (this.contents = project))
      .finally(() => (this.loading = false));
  }
}
