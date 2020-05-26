import { mount } from '@vue/test-utils';
import Projects from '@/pages/projects/index.vue';

describe('Page - Projects', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Projects);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
