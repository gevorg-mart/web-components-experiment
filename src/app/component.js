import { html, render } from 'lit-html';

export default class Component extends HTMLElement {
  render() {
    render(html(this.template()), this);
  }

  static define(componentName, componentClass) {
    if (typeof componentName !== 'string') {
      throw new Error('component name should be a string');
    }

    if (!componentName.includes('-')) {
      throw new Error('component name should contain character: "-"');
    }

    if (!(componentClass instanceof Component)) {
      throw new Error('component class should inherit from "Component"');
    }

    window.customElements.define(componentName, componentClass);
  }
}
