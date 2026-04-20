# CineList
CineList es una aplicación full-stack de seguimiento de cine inspirada en Letterboxd. Califica, reseña y gestiona tu lista de películas. Desarrollada con Vanilla JS, Bootstrap y Node.js. 🎬🍿

## 📂 Estructura del Proyecto

```text
cine-project/
├── backend/                # Lógica del servidor (Node.js/Express)
│   ├── controllers/        # Funciones que procesan las peticiones (Lógica de negocio)
│   ├── models/             # Estructura de los datos (Usuarios, Reviews, Películas)
│   ├── routes/             # Definición de los endpoints de la API (/api/movies, etc.)
│   ├── middleware/         # Funciones de seguridad y validación (ej. Auth)
│   ├── data/               # Archivos JSON locales o configuración de base de datos
│   └── server.js           # Punto de entrada principal del servidor
├── frontend/               # Lógica del cliente y diseño
│   ├── assets/             # Recursos estáticos
│   │   ├── css/            # Estilos personalizados (además de Bootstrap)
│   │   ├── img/            # Imágenes, logos y placeholders
│   │   └── js/             # Scripts de JavaScript Vanilla
│   │       ├── services/   # Funciones para peticiones Fetch (api.js)
│   │       ├── utils/      # Funciones de ayuda (formateo de fechas, validaciones)
│   │       ├── auth.js     # Lógica de inicio de sesión y registro
│   │       └── main.js     # Manipulación del DOM y lógica de la página principal
│   ├── pages/              # Archivos HTML adicionales (profile.html, movie-details.html)
│   └── index.html          # Punto de entrada principal (Home)
├── .gitignore              # Archivos y carpetas omitidos por Git (node_modules, .env)
├── package.json            # Gestión de dependencias y scripts del proyecto
└── README.md               # Documentación general del proyecto
