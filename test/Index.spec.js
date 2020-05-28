import { shallowMount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Page - Index', () => {
  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      const wrapper = shallowMount(Index);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
