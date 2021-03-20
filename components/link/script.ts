import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class Link extends Vue {
  @Prop({ type: String, default: '/' }) to?: string;
  @Prop({ type: String, default: '' }) color?: string;
}

export default Link;
