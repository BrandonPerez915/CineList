const landingHeroSheet = new CSSStyleSheet();
landingHeroSheet.replaceSync(`
  :host {
    display: block;
    width: 100%;
    font-family: 'Inter', sans-serif;
    color: white;
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* padding ajuste */
    padding: 60px 20px;
    /* Animación */
    animation: fadeIn 1s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .brand-large {
    display: flex;
    flex-direction: column; /* Cambiado a columna para que el logo esté arriba del texto */
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;
  }

  .logo-icon {
    width: 80px;
    height: 80px;
    fill: #00d2ff;
    filter: drop-shadow(0 0 15px rgba(0, 210, 255, 0.5));
  }

  .app-name {
    font-weight: 800;
    font-size: clamp(48px, 12vw, 90px);
    letter-spacing: -3px;
    margin: 0;
    line-height: 1;
    background: linear-gradient(to bottom, #fff, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tagline {
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
    margin-bottom: 48px;
    max-width: 600px;
    line-height: 1.6;
  }

  .cta-group {
    display: flex;
    gap: 20px;
  }

  .btn {
    padding: 16px 40px;
    border-radius: 14px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    text-decoration: none;
    display: inline-block;
  }

  .btn-primary {
    background-color: #00d2ff;
    color: #000;
    box-shadow: 0 10px 20px -5px rgba(0, 210, 255, 0.4);
  }

  .btn-secondary {
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .btn:hover {
    transform: translateY(-4px);
    filter: brightness(1.1);
  }
`);

class LandingHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [landingHeroSheet];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="hero-container">
        <div class="brand-large">
          <svg class="logo-icon" viewBox="0 -960 960 960">
            <path d="M440-280h80v-240h-80v240Zm68.5-331.5Q520-623 520-640t-11.5-28.5Q497-680 480-680t-28.5 11.5Q440-657 440-640t11.5 28.5Q463-600 480-600t28.5-11.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
          </svg>
          <h1 class="app-name">CineList</h1>
        </div>
        <p class="tagline">Tu biblioteca personal de cine y series. Organiza tus listas y descubre nuevas historias.</p>
        <div class="cta-group">
          <a href="register.html" class="btn btn-primary">Empezar ahora</a>
          <a href="login.html" class="btn btn-secondary">Inicia sesión</a>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('landing-hero')) {
  customElements.define('landing-hero', LandingHero);
}