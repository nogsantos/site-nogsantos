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
    'https://firebasestorage.googleapis.com/v0/b/site-nogsantos.appspot.com/o/public%2F';

  iconsList: Array<Object> = [
    {
      link: 'https://www.npmjs.com/~nogsantos',
      imagePath: `${this.baseImagePath}npm-n-transparent-black.png?alt=media&token=ff4efc2b-12e0-480b-bedb-c2414861e826`,
      imageMeta: 'NPM',
      imageSize: this.inconSize
    },
    {
      link: 'https://github.com/nogsantos',
      imagePath: `${this.baseImagePath}github-big-logo.png?alt=media&token=85da4931-314c-497f-a1b7-8e6a5c675e22`,
      imageMeta: 'Github',
      imageSize: this.inconSize
    },
    {
      link: 'https://hub.docker.com/u/nogsantos/',
      imagePath: `${this.baseImagePath}hubdocker-logo-128.png?alt=media&token=b23e8c25-2bb1-431e-b7d7-d6cb549b8900`,
      imageMeta: 'Docker Hub',
      imageSize: this.inconSize
    },
    {
      link: 'http://play.google.com/store/apps/dev?id=8823406920878088230',
      imagePath: `${this.baseImagePath}google-play.png?alt=media&token=42e9dbe6-e8be-4d35-ac5c-ef183c344b38`,
      imageMeta: 'Google Play',
      imageSize: this.inconSize
    },
    {
      link: 'http://www.linkedin.com/in/nogsantos',
      imagePath: `${this.baseImagePath}linkedin-logo.png?alt=media&token=0bad30d8-1f39-41ef-812b-bb54b8ed2015`,
      imageMeta: 'Linkedin',
      imageSize: this.inconSize
    },
    {
      link: 'https://twitter.com/nogsantos',
      imagePath: `${this.baseImagePath}twitter-logo-silhouette.png?alt=media&token=fd7dec62-ac38-4c89-a9ce-50d628a1bfd3`,
      imageMeta: 'Twitter',
      imageSize: this.inconSize
    }
  ];

  get today(): number {
    return new Date().getFullYear();
  }
}

export default Footer;
