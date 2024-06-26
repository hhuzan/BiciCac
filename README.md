# Bici CaC

### Link => [Bici CaC](https://bici-cac.vercel.app/)

## Trabajo Práctico Final del Curso de React en Codo-a-Codo 4.0

Web Page para visualizar en tiempo real el estado de las de [Estaciones Ecobici](https://baecobici.com.ar/) **favoritas** del usuario.

### Grupo 22:

-   Gisela Aballay
-   Fernando Jaleh
-   Hugo Huzan
-   Sergio Stekolschik

---

### Instalacion "Local"

-   Copiar el archivo `.env` a `env.local`
-   Agregar las keys en el archivo `env.local`
-   `npm install`
-   `npm run dev`

### Desarrollado con:

-   [React](https://react.dev/)
-   [Firebase Authentication](https://firebase.google.com/docs/auth)
-   [Firestore Database](https://firebase.google.com/docs/database)
-   [React Router DOM](https://www.npmjs.com/package/react-router-dom)
-   [MUI](https://mui.com/) UI Components
-   [Google Maps](https://www.google.com/maps/)
-   [Express.js](https://expressjs.com/) (backend)

### API

-   [API Transporte](https://api-transporte.buenosaires.gob.ar/) BA Ciudad

### Hosting

-   [Vercel](https://vercel.com/)

## Implementación:

-   Autenticación (Legistro, Login, Logout, Recupero de Clave) implementada con **Firebase Authentication**.
-   Listados de Estaciones Favoritas de cada Usuario almacenados en **Firestore Database**.
-   La pantalla principal combina los datos de las Estaciones Favoritas del usuaio(**Firebase**) y las de **descripciones** y **estados** de Estaciones **Ecobici** provistos por **APIs de la Ciudad**.
-   Las ubicaciones se muestran mediante **Google Maps**.
-   **UI** completamente realizada con componentes **MUI**.

---

Para evitar errorers de CORS, en modo development local, el acceso a las APIs se hace mediante un PROXY configurado en `vite.config.js`

El deploy en Vercel utiliza un backend mínimo que hace de gateway a las APIs del gobierno de la Ciudad y da acceso al html estático(React).

---

## ![Pantalla de  Login](images/1.png)

## ![Pantalla Principal](images/2.png)

![Pantalla de  Lonfiguración](images/3.png)
