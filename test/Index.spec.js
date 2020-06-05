import { shallowMount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('Page - Index', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Index);
  });

  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should render the page title', () => {
      const title = wrapper.find('.Subhead-heading');
      expect(title.text()).toBe('Fabricio Nogueira');
    });
  });
});
