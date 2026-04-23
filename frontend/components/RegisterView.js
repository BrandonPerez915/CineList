const registerSheet = new CSSStyleSheet();
registerSheet.replaceSync(`
  :host {
    display: block;
    font-family: 'Inter', sans-serif;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    color: white;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    fill: #00d2ff;
    filter: drop-shadow(0 0 8px rgba(0, 210, 255, 0.4));
  }

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .input-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 8px;
    margin-left: 4px;
  }

  input {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 14px;
    border-radius: 12px;
    color: white;
    font-size: 15px;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  input:focus {
    outline: none;
    border-color: #00d2ff;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.1);
  }

  .login-btn {
    width: 100%;
    background: #00d2ff;
    color: #000;
    border: none;
    padding: 16px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    transition: transform 0.2s ease;
  }

  .login-btn:hover {
    transform: translateY(-2px);
    opacity: 0.95;
  }

  .footer {
    text-align: center;
    margin-top: 24px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }

  .footer a {
    color: #00d2ff;
    text-decoration: none;
    font-weight: 600;
  }
`);

class RegisterView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [registerSheet];
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <div class="glass-card">
        <div class="header">
          <svg class="logo-icon" viewBox="0 -960 960 960">
            <path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
          </svg>
          <h2>Crear Cuenta</h2>
        </div>

        <div class="input-group">
          <label>Nombre Completo</label>
          <input type="text" placeholder="Tu nombre y apellido">
        </div>

        <div class="input-group">
          <label>Email</label>
          <input type="email" placeholder="correo@ejemplo.com">
        </div>

        <div class="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="••••••••">
        </div>

        <button class="login-btn" id="btn-registro">Registrarse</button>

        <div class="footer">
          ¿Ya tienes cuenta? <a href="login.html">Inicia sesión</a>
        </div>
      </div>
    `;

    const btnRegistro = this.shadowRoot.getElementById('btn-registro');
    btnRegistro.addEventListener('click', () => {
        btnRegistro.textContent = 'Creando cuenta...';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    });
  }
}
customElements.define('register-view', RegisterView);