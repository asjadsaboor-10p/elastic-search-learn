FROM node:10.13.0-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]