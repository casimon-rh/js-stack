# JS-STACK

Plantilla inicial para trabajar con proyectos basados en Javascript

## Stack

* P: Postgresql
* E: ExpresJS
* R: React
* N: NodeJS
* S: Sequelize

## Estructura de directorios

    .
    ├── .vscode                 # Debug config
    │   └── launch.json
    ├── bin                     # Nodemon Config
    │   └── www.js
    ├── client                  # Client code
    │   ├── public                  # Main static files
    │   │   ├── index.html          # Main html file
    │   │   └── manifest.json
    │   ├── src                     # Client Code
    │   │   ├── Actions             # Redux Actions
    │   │   ├── Components          # React Components (generic)
    │   │   ├── Pages               # React Components (navigation)
    │   │   ├── Reducers            # Redux Reducer
    │   │   ├── conf.js             # Env vars configuration
    │   │   ├── index.css           # Main css file
    │   │   ├── index.js            # Main react js (ReactDOM)
    │   │   └── registerServiceWorker.js
    │   ├── package-lock.json       # Client node dependencies
    │   └── package.json            # Client node dependencies
    ├── server                  # Server code
    │   ├── config                  # Sequelize connection
    │   ├── controllers             # Request management
    │   ├── migrations              # Sequelize migration (Schema)
    │   ├── models                  # Sequelize model definition
    │   ├── routes                  # Main route files
    │   └── seeders                 # Sequelize migration (Initial Data)
    ├── .dockerignore           # Exclude node_modules from docker build
    ├── .editorconfig           # Editor conventions
    ├── .eslintrc.yml           # ESLint config
    ├── .gitignore              # Git ignore (default node + cliente dirs)
    ├── .sequelizerc            # Sequelize default directories
    ├── app.js                  # Main Node file
    ├── conf.js                 # Env vars configuration
    ├── Dockerfile              # Docker image
    ├── entrypoint.sh           # Run migrations and client build into container
    ├── LICENSE                 # GPL-3.0 and above
    ├── package-lock.json       # Node dependencies
    ├── package.json            # Node dependencies
    └── README.md