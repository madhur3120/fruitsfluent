# Create App Directory
# Build react client
FROM node:16.13.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5002

CMD ["npm","start"]