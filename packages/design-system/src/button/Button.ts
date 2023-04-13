import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('my-button')
export class Button extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button {
        background-color: cornflowerblue;
        border-radius: 4px;
        border: none;
        color: white;
        padding: 8px 16px;
      }
    `
  ];

  render() {
    return html`<button>Click me</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'my-button': Button;
  }
}