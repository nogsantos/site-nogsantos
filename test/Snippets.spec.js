import { mount, createLocalVue } from '@vue/test-utils';
import Snippets from '@/pages/snippets/index.vue';
import { Cover } from '@/components/';

const localVue = createLocalVue();

describe('Page - Snippets', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Snippets, { localVue });
  });

  describe('Initial state', () => {
    it.skip('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it.skip('should render cover component', () => {
      expect(wrapper.findComponent(Cover).exists()).toBeTruthy();
    });
  });
});
