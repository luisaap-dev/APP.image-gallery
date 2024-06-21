## Aplicación de Galería de Imágenes

Este repositorio contiene una aplicación de Galería de Imágenes construida con React. Los usuarios pueden ver, agregar, actualizar y eliminar imágenes. El backend está alimentado por PHP y MySQL.

### Características

- **Ver Imágenes**: Los usuarios pueden ver una lista de imágenes con sus nombres y URL.
- **Agregar Imagen**: Los usuarios pueden agregar nuevas imágenes proporcionando un nombre y una URL de imagen.
- **Actualizar Imagen**: Los usuarios pueden actualizar el nombre y la URL de una imagen existente.
- **Eliminar Imagen**: Los usuarios pueden eliminar una imagen de la galería.
- **Autenticación de Usuario**: Los usuarios pueden iniciar sesión y cerrar sesión para acceder a la aplicación.

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/luisaap-dev/APP.image-gallery
```

2. Navega hasta el directorio del proyecto:

```bash
cd image-gallery-app
```

3. Instala las dependencias:

```bash
npm install
```

### Uso

1. Inicia el servidor de desarrollo:

```bash
npm run dev
```

2. Abre tu navegador y visita `http://localhost:3000` para usar la aplicación de Galería de Imágenes.

### Configuración del Backend

Antes de usar la aplicación, asegúrate de configurar el backend:

1. Crea una base de datos MySQL llamada `images_db`.
2. Importa el script SQL proporcionado para crear las tablas necesarias (`images` y `users`).
3. Actualiza los detalles de conexión a la base de datos en `index.php` (nombre de host, nombre de usuario, contraseña).

### Endpoints de la API del Backend

- **GET /index.php**: Recupera todas las imágenes de la base de datos.
- **POST /index.php**: Agrega una nueva imagen a la base de datos.
- **PUT /index.php**: Actualiza una imagen existente en la base de datos.
- **DELETE /index.php**: Elimina una imagen de la base de datos.
- **POST /index.php?action=login**: Inicia sesión de un usuario.
- **POST /index.php?action=logout**: Cierra sesión de un usuario.

### Componentes

- **NavBar**: Muestra la barra de navegación con funcionalidad de inicio de sesión y cierre de sesión.
- **ImageForm**: Permite a los usuarios agregar nuevas imágenes.
- **ImageList**: Muestra una lista de imágenes con opciones para actualizar o eliminar cada imagen.

### Tecnologías Utilizadas

- React.js
- PHP
- MySQL

### Contribuidores

- [Luis Ares](https://github.com/luisaap-dev)

### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
