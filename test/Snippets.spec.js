import { shallowMount } from '@vue/test-utils';
import Snippets from '@/pages/snippets/index.vue';
import { Cover } from '@/components/';

describe('Page - Snippets', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Snippets);
  });

  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should render cover component', () => {
      expect(wrapper.findComponent(Cover).exists()).toBeTruthy();
    });
  });
});
