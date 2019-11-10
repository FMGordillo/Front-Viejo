FROM node:latest
MAINTAINER Facundo Martin Gordillo <facundomgordillo@gmail.com>
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build
CMD ["npm", "run", "serve"]
