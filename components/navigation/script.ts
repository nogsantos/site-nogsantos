import { Vue, Component } from 'vue-property-decorator';
import { Logo } from '@/components/';

@Component({
  components: {
    'fn-logo': Logo
  }
})
class Navigation extends Vue {}

export default Navigation;
