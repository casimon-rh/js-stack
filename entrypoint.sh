#!/bin/bash
# ExpressJS + Sequelize
# Migrations & Run

STOP_PROC=0;

if [ ! -z "$DATABASE_URL" ]; then sequelize db:migrate; fi
if [ ! -z "$DATABASE_URL" ]; then sequelize db:seed:all; fi

npm run build --prefix ./src/client
npm start


trap "docker_stop" SIGINT SIGTERM

function docker_stop {
    export STOP_PROC=1;
}

EXIT_DAEMON=0

while [ $EXIT_DAEMON -eq 0 ]; do
    if [ $STOP_PROC != 0 ]
    then
        break;
    fi
    sleep 5
done