import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class Logo extends Vue {
  @Prop({ type: String, required: true }) readonly linkTo!: String;
}

export default Logo;
