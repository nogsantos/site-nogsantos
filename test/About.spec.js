import { mount } from '@vue/test-utils';
import About from '@/pages/about/index.vue';

describe('Page - About', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(About);
  });

  describe('Initial state', () => {
    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    // it('should render the page title', () => {
    //   const title = wrapper.find('.Subhead-heading');
    //   expect(title.text()).toBe('Sobre');
    // });
  });
});
