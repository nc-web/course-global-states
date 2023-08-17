import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// Components
import './example-auth/auth-info.js';
import './example-auth/auth-control.js';

@customElement('lit-redux-toolkit-ts')
export class LitReduxToolkitTs extends LitElement {
  @property({ type: String }) header = 'My app';

  render() {
    return html`
      <main>
        <auth-info></auth-info>
        <auth-control></auth-control>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
