import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('auth-info')
export class AuthInfo extends LitElement {
  render() {
    return html`
      <div>
        <h4>Hello World</h4>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
  `;
}
