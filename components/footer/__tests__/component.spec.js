import { mount } from '@vue/test-utils';
import { Footer } from '@/components/index';

describe('Component - Footer', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Footer);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
