FROM node:carbon
WORKDIR /usr/src/app
RUN npm run prebuild
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run postbuild
RUN npm run migrate
EXPOSE 8101
CMD [ "npm","start" ]