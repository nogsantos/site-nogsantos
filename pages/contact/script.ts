import { Component } from 'nuxt-property-decorator';
import { Static } from '@/pages/Classes/Content';
@Component({
  head() {
    return {
      title: 'Fabricio Nogueira | Contato',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Entre em contato',
        },
      ],
    };
  },
})
class Contact extends Static {
  created(): void {
    this.fetch('contact');
  }
}

export default Contact;
