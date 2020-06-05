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

    // it('should render the page title', () => {
    //   const title = wrapper.find('.Subhead-heading');
    //   expect(title.text()).toBe('Contato');
    // });
  });
});
