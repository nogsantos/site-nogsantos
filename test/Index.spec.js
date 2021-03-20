import { mount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Page - Index', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Index);
  });

  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
