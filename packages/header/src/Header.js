export class Header extends HTMLElement {
    constructor() {
        super();

        // Initialize the component's state
        this.attachShadow({mode: 'open'});

        // Create a style element and append it to the component's shadow root
        const style = document.createElement('style');
        style.textContent = `
        :host {
            width: 100vh;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            background: aquamarine;
            font-family: sans-serif;
            justify-content: center;
            align-items: center;
        }
        
        div {
            padding: 1.2em;
        }
        `;
        this.shadowRoot.appendChild(style);

        // Create a button element, set its text content, and add any classes specified as an attribute
        const node = document.createElement('div');
        node.textContent = this.textContent ? this.textContent : 'Header';

        this.shadowRoot.appendChild(node);
    }
}

customElements.define('header-component', Header);
