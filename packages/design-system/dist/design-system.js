import { css as a, LitElement as c, html as i } from "lit";
import { property as u, customElement as f } from "lit/decorators.js";
var y = Object.defineProperty, h = Object.getOwnPropertyDescriptor, m = (n, t, o, r) => {
  for (var e = r > 1 ? void 0 : r ? h(t, o) : t, l = n.length - 1, p; l >= 0; l--)
    (p = n[l]) && (e = (r ? p(t, o, e) : p(e)) || e);
  return r && e && y(t, o, e), e;
};
let s = class extends c {
  constructor() {
    super(...arguments), this.name = "";
  }
  render() {
    return i`Hey there ${this.name}! Welcome to <span class='blue'>11ty + Lit</span>. You passed from lightDOM: <slot></slot>`;
  }
};
s.styles = [
  a`
            :host {
                display: block;
            }

            .blue {
              color: blue;
            }
        `
];
m([
  u({ type: String })
], s.prototype, "name", 2);
s = m([
  f("my-greeting")
], s);
export {
  s as Greeting
};
