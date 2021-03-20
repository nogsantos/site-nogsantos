import { Vue, Component, Prop } from 'vue-property-decorator';
import { Link } from '@/components/';

@Component({
  components: {
    'fn-link': Link
  }
})
export default class Cover extends Vue {
  @Prop({ type: String, required: true }) title?: string;
  @Prop({ type: Array, default: [] }) items?: Array<string>;
  @Prop({ type: String, required: true }) link?: string;
  @Prop({ type: Boolean, default: false }) loading?: boolean;
}
