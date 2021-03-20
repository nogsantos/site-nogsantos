import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class LinkImage extends Vue {
  @Prop({ type: String, required: true }) link!: string;
  @Prop({ type: String, required: true }) imagePath!: string;
  @Prop({ type: String, required: true }) imageMeta!: string;
  @Prop({ type: Number, default: 42 }) imageSize?: number;
}

export default LinkImage;
