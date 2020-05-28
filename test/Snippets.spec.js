import { mount } from '@vue/test-utils';
import Snippets from '@/pages/snippets/index.vue';

describe('Page - Snippets', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Snippets);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
