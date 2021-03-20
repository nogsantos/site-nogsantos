import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
  @Prop({ type: String, required: true }) title?: string;
  @Prop({ type: String, required: true }) content?: string;
  @Prop({ type: String, default: undefined }) excerpt?: string;
  @Prop({ type: Array, default: [] }) tags?: Array<string>;
}
