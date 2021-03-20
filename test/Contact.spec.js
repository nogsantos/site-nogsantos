import { mount } from '@vue/test-utils';
import Contact from '@/pages/contact/index.vue';

describe('Page - Contact', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Contact);
  });

  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
