import { Component } from 'nuxt-property-decorator';
import { Static } from '@/pages/Classes/Content';
@Component({
  head() {
    return {
      title: 'Fabricio Nogueira | Sobre',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sobre',
        },
      ],
    };
  },
})
class About extends Static {
  created(): void {
    this.fetch('about');
  }
}

export default About;
