import { Vue, Component } from 'vue-property-decorator';

@Component
class Footer extends Vue {
  get today(): Number {
    return new Date().getFullYear();
  }
}

export default Footer;
