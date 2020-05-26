import { mount } from '@vue/test-utils';
import { Navigation } from '@/components/index';

describe('Component - Navigation', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Navigation);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
