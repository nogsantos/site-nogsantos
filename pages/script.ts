import { Component } from 'nuxt-property-decorator';
import { Static } from '@/pages/Classes/Content';

@Component({
  head() {
    return {
      title: 'Fabricio Nogueira',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Programador | Python | Javascript | DevOps',
        },
      ],
    };
  },
})
class Index extends Static {
  created(): void {
    this.fetch('index');
  }
}

export default Index;
