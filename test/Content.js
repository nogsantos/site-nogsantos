import { mount } from '@vue/test-utils';
import Content from '@/components/content/index.vue';

describe('Component - Content', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Content);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
