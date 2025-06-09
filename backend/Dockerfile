# Imagem base
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta da API
EXPOSE 3001

# Comando para rodar o servidor
CMD ["node", "src/index.js"]
