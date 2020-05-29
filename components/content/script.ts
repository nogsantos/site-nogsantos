import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
  @Prop({ type: String, required: true }) title?: String;
  @Prop({ type: String, required: true }) content?: String;
  @Prop({ type: String, default: undefined }) excerpt?: String;
  @Prop({ type: Array, default: [] }) tags?: Array<String>;
}
