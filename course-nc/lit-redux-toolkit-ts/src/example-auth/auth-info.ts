import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('auth-info')
export class AuthInfo extends LitElement {
  @property({ attribute: false })
  isAuthenticated: Boolean;

  constructor() {
    super();
    this.isAuthenticated = false;
  }

  render() {
    if (this.isAuthenticated) {
      return html` <p>Hi, you're signed in</p> `;
    }
    return html` <p>Sing out</p> `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
  `;
}
