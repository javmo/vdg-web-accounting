# Utiliza una imagen base oficial de Node.js (Alpine)
FROM node:14-alpine as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm ci

# Copia el resto del código fuente al directorio de trabajo
COPY . .

# Construye la aplicación de React para producción
RUN npm run build

# Utiliza una imagen base de Nginx (Alpine) para servir la aplicación de React
FROM nginx:1.21-alpine

# Copia la configuración de Nginx (si es necesario)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de la aplicación construida al directorio predeterminado de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Inicia Nginx en modo daemon
CMD ["nginx", "-g", "daemon off;"]
