import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class Link extends Vue {
  @Prop({ type: String, default: '/' }) to?: String;
  @Prop({ type: String, default: '' }) color?: String;
}

export default Link;
