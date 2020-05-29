import { Vue, Component, Prop } from 'vue-property-decorator';
import { Link } from '@/components/';

@Component({
  components: {
    'fn-link': Link
  }
})
export default class Cover extends Vue {
  @Prop({ type: String, required: true }) title?: String;
  @Prop({ type: Array, default: [] }) items?: Array<String>;
  @Prop({ type: String, required: true }) link?: String;
  @Prop({ type: Boolean, default: false }) loading?: Boolean;
}
