# Backend

## Scripts de Node

### Instalar los paquetes necesarios

Una vez clonado el repositorio y antes de ejecutarlo se debe llamar este script para instalar los paquetes necesarios.

```bash
npm install
```

### Ejecutar en lanzamiento

**start** es un script de **npm** definido en **package.json** el cual ejecuta `node src/api.js`, lo cual pone en marcha la api.

```bash
npm start
```

### Ejecutar en desarrollo

**dev** es un script de **npm** definido en **package.json** el cual ejecuta `nodemon src/api.js`, lo cual hacer que la ejecucion se reinicie cada vez que se actualiza un archivo.

```bash
npm run dev
```

## Paquetes

Paquetes siendo usados por el proyecto

- nodemon
- express-js
- node-postgres
