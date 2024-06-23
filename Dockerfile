# Etapa 1: Build do projeto
FROM node:18 AS builder

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante dos arquivos do projeto
COPY . .

# Build do projeto
RUN npm run build

# Etapa 2: Servindo os arquivos estáticos com Nginx
FROM nginx:alpine

# Copiando a configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiando os arquivos construídos para a pasta do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expondo a porta 80
EXPOSE 80

# Comando de inicialização do Nginx
CMD ["nginx", "-g", "daemon off;"]
