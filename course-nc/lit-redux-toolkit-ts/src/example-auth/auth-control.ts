import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

customElement('auth-control');
export class AuthControl extends LitElement {
  @property({ attribute: false })
  isAuthenticated: Boolean;

  constructor() {
    super();
    this.isAuthenticated = false;
  }

  handleSignIn() {
    this.isAuthenticated = true;
  }

  handleSignOut() {
    this.isAuthenticated = false;
  }

  render() {
    if (this.isAuthenticated) {
      return html` <button @click=${this.handleSignOut}>Sign Out</button> `;
    }
    return html` <button @click=${this.handleSignIn}>Sign In</button> `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
  `;
}
