const navbarSheet = new CSSStyleSheet();

navbarSheet.replaceSync(`
  :host {
    display: block;
    width: 100%;
    background-color: #000;
    color: white;
    font-family: 'Inter', -apple-system, sans-serif;
    height: 60px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .left-side {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: white;
  }

  .logo-icon {
    width: 24px;
    height: 24px;
    fill: #00d2ff;
  }

  .app-name {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -1px;
    margin: 0;
  }

  .nav-links {
    display: flex;
    gap: 30px;
  }

  .nav-link {
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: color 0.2s;
  }

  .link-home { color: #00d2ff; }
  .link-browse { color: #666; } /* Gris apagado para inactivo */

  .nav-link:hover { color: white; }

  .right-side {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .search-icon {
    width: 26px;
    height: 26px;
    fill: #666;
    cursor: pointer;
    transition: fill 0.2s;
  }

  .search-icon:hover { fill: white; }

  .user-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px;
    border-radius: 30px;
    background-color: #111;
    border: 1px solid #222;
    cursor: pointer;
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #333;
  }

  .user-name {
    font-weight: 400;
    font-size: 14px;
    color: white;
  }

.icon-btn {
  background: transparent;
  border: none;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn svg {
  width: 26px;
  height: 26px;
  fill: #666;
  transition: fill 0.2s;
}

.icon-btn:hover svg {
  fill: white;
}

.logout-confirm-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  align-items: center;
  justify-content: center;
}

.logout-confirm-overlay.visible {
  display: flex;
}

.logout-confirm-box {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.logout-confirm-box strong {
  color: white;
  font-size: 18px;
}

.logout-confirm-box p {
  margin: 0;
  font-size: 15px;
  color: #ccc;
  line-height: 1.5;
}

.logout-confirm-actions {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.logout-cancel {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #444;
  background: transparent;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}

.logout-confirm-btn {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: #ff4d4d;
  color: white;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}
`);

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [navbarSheet];
    this._render();
  }

  static get observedAttributes() {
    return ['user-name', 'user-avatar'];
  }

  attributeChangedCallback() {
    this._update();
  }

  _update() {
    const nameElement = this.shadowRoot.querySelector('.user-name');
    const avatarElement = this.shadowRoot.querySelector('.user-avatar');

    if (nameElement) nameElement.textContent = this.getAttribute('user-name') || 'guest';
    if (avatarElement) avatarElement.src = this.getAttribute('user-avatar') || '';
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <nav class="navbar">
        <div class="left-side">
          <a href="#" class="brand">
            <svg class="logo-icon" viewBox="0 -960 960 960">
              <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-25 13.5-45t36.5-29l506-206 26 66-330 134h468q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-280H160v280Zm231-69q29-29 29-71t-29-71q-29-29-71-29t-71 29q-29 29-29 71t29 71q29 29 71 29t71-29ZM160-520h480v-80h80v80h80v-120H160v120Zm0 360v-280 280Z"/>
            </svg>
            <h1 class="app-name">CineList</h1>
          </a>
          <div class="nav-links">
            <a href="/frontend/views/home.html" class="nav-link link-home">Inicio</a>
            <a href="/frontend/views/search.html" class="nav-link link-browse">Explorar</a>
            <a href="/frontend/views/my-lists.html" class="nav-link link-browse">Mis Listas</a>
          </div>
        </div>

        <div class="right-side">
          <svg class="search-icon" id="search-btn" viewBox="0 -960 960 960">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
          </svg>

          <div class="user-badge" id="user-badge">
            <img class="user-avatar" alt="">
            <span class="user-name"></span>
          </div>

          <button class="icon-btn logout-btn" id="logout-btn" title="Cerrar sesión">
             <svg viewBox="0 -960 960 960">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
             </svg>
          </button>
        </div>

        <div class="logout-confirm-overlay" id="logout-overlay">
          <div class="logout-confirm-box">
            <strong>¿Cerrar sesión?</strong>
            <p>Se cerrará tu sesión actual.</p>
            <div class="logout-confirm-actions">
              <button class="logout-cancel" id="logout-cancel">Cancelar</button>
              <button class="logout-confirm-btn" id="logout-confirm">Salir</button>
            </div>
          </div>
        </div>
      </nav>
    `;

    this.shadowRoot.getElementById('search-btn')?.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navbar-search-click', {
        bubbles: true,
        composed: true,
      }));
    });

    this.shadowRoot.getElementById('user-badge')?.addEventListener('click', () => {
      window.location.href = '/frontend/views/profile.html';
    });

    this.shadowRoot.getElementById('logout-btn')?.addEventListener('click', () => {
      this.shadowRoot.getElementById('logout-overlay').classList.add('visible');
    });

    this.shadowRoot.getElementById('logout-cancel')?.addEventListener('click', () => {
      this.shadowRoot.getElementById('logout-overlay').classList.remove('visible');
    });

    this.shadowRoot.getElementById('logout-confirm')?.addEventListener('click', () => {
      window.location.href = '/frontend/views/landing.html';
    });

    this._update();
  }
}

if (!customElements.get('cine-navbar')) {
  customElements.define('cine-navbar', Navbar);
}
