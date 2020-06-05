import { shallowMount } from '@vue/test-utils';
import Posts from '@/pages/posts/index.vue';
import { Cover } from '@/components/';

describe('Page - Posts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Posts);
  });

  describe('Initial page state', () => {
    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should render cover component', () => {
      expect(wrapper.findComponent(Cover).exists()).toBeTruthy();
    });
  });

  describe('Initial page slug state', () => {
    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should render cover component', () => {
      expect(wrapper.findComponent(Cover).exists()).toBeTruthy();
    });
  });
});
