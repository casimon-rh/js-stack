FROM node
WORKDIR /usr/src/app
COPY package*.json ./
COPY entrypoint.sh ./
RUN npm install
COPY src/client/package*.json ./src/client/
RUN npm install --prefix ./src/client
COPY . .
RUN npm i -g sequelize sequelize-cli pg pg-hstore
EXPOSE 8101
ENTRYPOINT [ "/bin/bash","entrypoint.sh" ]