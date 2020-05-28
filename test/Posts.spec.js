import { mount } from '@vue/test-utils';
import Posts from '@/pages/posts/index.vue';

describe('Page - Posts', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Posts);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
