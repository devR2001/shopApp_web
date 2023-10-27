// Importiere die App.vue-Komponente
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('rendert alle Komponenten korrekt', () => {
    const wrapper = mount(App);

    // Überprüfe, ob alle deine Komponenten gerendert wurden
    expect(wrapper.findComponent({ name: 'NavBar' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'HelloWorld' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'News' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'Footer' }).exists()).toBe(true);
  });
});
