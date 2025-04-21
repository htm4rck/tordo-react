FROM node:18-alpine

WORKDIR /app

# Habilitar corepack
RUN corepack enable

# Copiar todos los archivos de configuración de Yarn 4
COPY package.json yarn.lock .yarnrc.yml .pnp.* .yarn/ ./

# Instalar dependencias (genera .pnp.cjs y otros)
RUN yarn install

# Copiar el resto del código fuente
COPY . .

# Build de producción
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
