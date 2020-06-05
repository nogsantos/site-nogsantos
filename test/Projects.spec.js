import { shallowMount } from '@vue/test-utils';
import Projects from '@/pages/projects/index.vue';
import { Cover } from '@/components/';

describe('Page - Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Projects);
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
