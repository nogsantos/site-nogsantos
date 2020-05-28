import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class LinkImage extends Vue {
  @Prop({ type: String, required: true }) link!: String;
  @Prop({ type: String, required: true }) imagePath!: String;
  @Prop({ type: String, required: true }) imageMeta!: String;
  @Prop({ type: Number, default: 42 }) imageSize?: Number;
}

export default LinkImage;
