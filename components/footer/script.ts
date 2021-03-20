import { Vue, Component } from 'vue-property-decorator';
import { LinkImage } from '@/components/';

@Component({
  components: {
    'link-image': LinkImage
  }
})
class Footer extends Vue {
  inconSize: number = 24;
  baseImagePath: string =
    'https://apisite.fabricionogueira.me/wp-content/uploads/2018/01';

  iconsList: Array<Object> = [
    {
      link: 'https://www.npmjs.com/~nogsantos',
      imagePath: `${this.baseImagePath}/npm-n-transparent-black.png`,
      imageMeta: 'NPM',
      imageSize: this.inconSize
    },
    {
      link: 'https://github.com/nogsantos',
      imagePath: `${this.baseImagePath}/github-big-logo.png`,
      imageMeta: 'Github',
      imageSize: this.inconSize
    },
    {
      link: 'https://hub.docker.com/u/nogsantos/',
      imagePath: `${this.baseImagePath}/hubdocker-logo-128.png`,
      imageMeta: 'Docker Hub',
      imageSize: this.inconSize
    },
    {
      link: 'http://play.google.com/store/apps/dev?id=8823406920878088230',
      imagePath: `${this.baseImagePath}/google-play.png`,
      imageMeta: 'Google Play',
      imageSize: this.inconSize
    },
    {
      link: 'http://www.linkedin.com/in/nogsantos',
      imagePath: `${this.baseImagePath}/linkedin-logo.png`,
      imageMeta: 'Linkedin',
      imageSize: this.inconSize
    },
    {
      link: 'https://twitter.com/nogsantos',
      imagePath: `${this.baseImagePath}/twitter-logo-silhouette.png`,
      imageMeta: 'Twitter',
      imageSize: this.inconSize
    }
  ];

  get today(): number {
    return new Date().getFullYear();
  }
}

export default Footer;
