import { mount, createLocalVue } from '@vue/test-utils';
import Projects from '@/pages/projects/index.vue';
import { Cover } from '@/components/';

const localVue = createLocalVue();

describe('Page - Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Projects, { localVue });
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
