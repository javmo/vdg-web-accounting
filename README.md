# Flujo de trabajo con ramas en Git

Este documento describe un flujo de trabajo general para trabajar con ramas en proyectos utilizando Git.

## Estructura de ramas

1. **Rama principal (main o master):** Rama principal del proyecto que contiene el código fuente de producción. Debe mantenerse estable y libre de errores.

2. **Rama de desarrollo (develop):** (Opcional) Rama intermedia entre la rama principal y las ramas de características. Contiene el último código de desarrollo que aún no está listo para la producción pero ha pasado por una revisión y pruebas básicas.

3. **Ramas de características (feature branches):** Ramas creadas para desarrollar nuevas características o solucionar problemas específicos. Por lo general, se crean a partir de la rama principal o de la rama de desarrollo y se fusionan de nuevo en la rama correspondiente una vez que la tarea está completa y ha sido revisada.

## Flujo de trabajo

1. **Actualizar el repositorio local:**

```bash
git checkout main (o git checkout develop, según la estructura de tu proyecto)
git pull origin main (o git pull origin develop)
```
2. **Crear y cambiar a una rama de características:** 
```bash
git checkout -b feature/nueva-caracteristica
```

3. **Realizar cambios en el código y confirmar los cambios en la rama de características:** 
```bash
git add .
git commit -m "Descripción de los cambios realizados"
```

4. **Empujar la rama de características al repositorio remoto:** 
```bash
git push origin feature/nueva-caracteristica
```

5. **Crear una solicitud de extracción (pull request):** 
Una vez que la tarea esté completa y haya sido probada, crea una solicitud de extracción para fusionar la rama de características en la rama principal (main) o en la rama de desarrollo (develop), según corresponda en tu proyecto.

6. **Fusionar la rama de características:** 
Después de que la solicitud de extracción haya sido revisada y aprobada por otros miembros del equipo, fusiona la rama de características en la rama principal o de desarrollo.

7. **Eliminar la rama de características:** 
```bash
git branch -D feature/nueva-caracteristica
```
si antes de deletear nos pide cambiar de branch nos movemos a develop o main
```bash
git checkout develop
```
volvemos a tirar el comando de deltear la branch y despues hacemos el push del delten al repo remoto
```bash
git push origin --delete feature/nueva-caracteristica
```


8. **Repetir este proceso:** 
para cada nueva característica, corrección de errores o experimento.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Levantar servicios que utiliza la web en local
```sh 
docker-compose up
```

## Configuración del proyecto
 - Crea un archivo llamado .env en la raíz de tu proyecto.
 - Añade las siguientes variables de entorno al archivo .env. Asegúrate de reemplazar los valores de ejemplo con los valores adecuados para tu entorno(VER que puerto levanto la vdg-api-accoutning en docker)

```sh 
GENERATE_SOURCEMAP=false
# URL api a consumir (vdg-api-accounting)
REACT_APP_API_URL=http://localhost:4000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```
vdg-web-accounting/
├─ public/
├─ src/
│   ├─ assets/
│   │   ├─ images/
│   │   └─ styles/
│   ├─ components/
│   │   ├─ app/
│   │   ├─ App.js
│   │   ├─ common/
│   │   ├─ wallet/
│   │   └─ ...
│   ├─ config/
│   ├─ hooks/
│   ├─ pages/
│   │   ├─ Auth/
│   │   ├─ Dashboard/
│   │   └─ ...
│   ├─ store/
│   │   ├─ actions/
│   │   ├─ reducers/
│   │   └─ index.js
│   ├─ utils/
│   ├─ index.js
│   └─ Routes.js
├─ .env
├─ .gitignore
└─ package.json
```

```
Explicación de la estructura:

public/: Contiene archivos estáticos como index.html, favicon.ico, etc.
src/: Contiene todos los archivos de código fuente de tu proyecto.
assets/: Contiene recursos como imágenes y hojas de estilo.
images/: Almacena imágenes y otros archivos multimedia.
styles/: Almacena archivos CSS o SCSS globales.
components/: Contiene componentes reutilizables y específicos de la aplicación.
app/
common/: Componentes comunes y reutilizables en toda la aplicación (botones, tarjetas, etc.).
wallet/: Componentes relacionados con la conexión de la wallet y otras funcionalidades específicas.
config/: Contiene archivos de configuración y constantes del proyecto.
hooks/: Almacena tus hooks personalizados de React.
pages/: Contiene componentes de nivel superior que representan páginas individuales.
store/: Contiene la configuración y archivos relacionados con la gestión del estado (por ejemplo, Redux).
actions/: Almacena las acciones de Redux.
reducers/: Almacena los reducers de Redux.
index.js: Configura el store de Redux.
utils/: Almacena funciones de utilidad y otros archivos de soporte.
App.js: Componente principal de la aplicación.
index.js: Punto de entrada principal de la aplicación.
Routes.js: Contiene la configuración de enrutamiento de la aplicación.
```