import { mount } from '@vue/test-utils';
import Contact from '@/pages/contact/index.vue';

describe('Page - Contact', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = mount(Contact);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
