import { Vue, Component } from 'nuxt-property-decorator';
import { Link } from '@/components/';
import projects from '~/contents/projects';

@Component({
  components: {
    'fn-link': Link
  },
  head() {
    return {
      title: `Fabricio Nogueira - Projects`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projects and work in progress'
        }
      ]
    };
  }
})
export default class Projects extends Vue {
  projects: Array<String> = [];

  async asyncImport(project: String) {
    const content = await import(`~/contents/projects/${project}.md`);
    return content.attributes;
  }

  async fetch() {
    return await Promise.all(
      projects.map((content) => this.asyncImport(content))
    ).then((projects) => {
      this.projects = projects;
    });
  }
}
