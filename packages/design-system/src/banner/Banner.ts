import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('my-banner')
export class Banner extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`<header><nav role='banner'><h1>11ty + Lit</h1></nav></header>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'my-banner': Banner;
  }
}