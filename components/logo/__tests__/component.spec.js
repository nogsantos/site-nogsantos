import { mount } from '@vue/test-utils';
import { Logo } from '@/components/';

describe('Component - Logo', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Logo);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
