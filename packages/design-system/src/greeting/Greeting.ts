import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('my-greeting')
export class Greeting extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            .blue {
              color: blue;
            }
        `
    ];

    @property({ type: String }) name: string = '';

    render() {
        return html`Hey there ${this.name}! Welcome to <span class='blue'>11ty + Lit</span>. You passed from lightDOM: <slot></slot>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'my-greeting': Greeting;
    }
}
