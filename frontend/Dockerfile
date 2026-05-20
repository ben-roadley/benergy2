FROM node:20-alpine

WORKDIR /usr/src/frontend

# Copy package manifests first for better cache behavior
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]
