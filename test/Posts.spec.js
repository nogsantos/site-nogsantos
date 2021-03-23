import { mount, createLocalVue } from '@vue/test-utils';
import Posts from '@/pages/posts/index.vue';
import { Cover } from '@/components/';

const localVue = createLocalVue();

describe('Page - Posts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Posts, { localVue });
  });

  describe('Initial page state', () => {
    it.skip('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it.skip('should render cover component', () => {
      expect(wrapper.findComponent(Cover).exists()).toBeTruthy();
    });
  });

  describe('Initial page slug state', () => {
    it.skip('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it.skip('should render cover component', () => {
      expect(wrapper.findComponent(Cover).exists()).toBeTruthy();
    });
  });
});
