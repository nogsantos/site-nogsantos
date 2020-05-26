import { Vue, Component } from 'vue-property-decorator';
import { Navigation, Footer } from '@/components/';

@Component({
  components: {
    'fn-navigation': Navigation,
    'fn-footer': Footer
  }
})
class Layout extends Vue {}
export default Layout;
