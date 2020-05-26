import { mount } from '@vue/test-utils';
import About from '@/pages/about';

describe('Page - About', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(About);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
