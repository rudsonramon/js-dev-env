# js-dev-env
JavaScript Development Environment from my personal project

# git Commands
1.Stage all the files changed
git add .

2.Commit changes locally
git commit -m "added new features"

3.Push work to Github
git push

## To disable SSL verification for a specific repository
If the repository is completely under your control, you can try:

- git config http.sslVerify false

# Javascript editors - Options
- VSCode;
- Webstorm;
- Atom;
- Brackets;

# Project standard definitions

## Define  a Consistent code style (https://editorconfig.org/)
Create a file called .editorconfig and place it in the root of your project
[myProject]
|- .editorconfig

it helps you to have a standard for you editor configuration to everyone who is coding with you.

## Package managers

- NPM; (the most popular)
- JSPM;
- Bower;
- Jam;
- Volo.

The package.json is a copy from => http://bit.ly/jsdevpackagejson
After this, just use npm install to get all the necessary packages to this project.

## Security Scanning
- retire.js
- Node Security Platform
"npm install -g nsp"
"nsp check" will check for vulnerabilities of all packages.

## Development Web Server

- Http-server;
  -  Ultra-simple.
  -  Single command servers current directory
- Live-server;
  -  Lightweight;
  -  Support live-reloading;
- Express;
  -  Comprehensive;
  -  Higly configurable;
  -  Production grade;
  -  Can run it everywhere;
  -  other alternatives (Koa and hapi);

### Bundler
- budo;
  - Integrates with Browserify;
  - Includes hot reloading;
- Webpack Dev Server
  - Built to Webpack;
  - Serves from memory;
  - Includes hot reloading;
- Browsersync (https://github.com/BrowserSync/recipes)
 - Dedicated IP for sharing work on LAN;
 - All interactions remain in sync!;
 - Great for cross-device testing;
 - Integrates with Webpack, Browserify, Gulp;

# Project structure
|[buildScripts]
|- srcServer.js
|[node_modules]
- .editorconfig
- package.json
- README.md

## Server file (example)
- 1) create the file buildScripts/srcServer.js
- 2) create src/index.html

### srcServer.js
```
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})
```

# Sharing work-in-progress (available players)
- localtunnel;
  - Easily share work on your local machine;
    - Setup:
    - 1) npm install localtunnel -g
    - 2) Start your app
    - 3) lt --port 3000
- ngrok (provide browser sync / Easy setup);
  - Secure tunnel to your local machine
    - Setup:
    - 1) Sign up
    - 2) Install ngrok
    - 3) Install authtoken
    - 4) Start your app
    - 5) ./ngrok http 80
- now;
  - Quickly deploy Node.js to the cloud
    - Setup:
    - 1) npm install -g now
    - 2) Create start script
    - 3) now
- Surge (do not suport nodejs files);
  - Quickly host static files to public URL
  - Setup:
  - 1) npm install -g surge
  - 2) surge

  # Automation
  - Grunt;
    - Configuration over code
    - Writes intermediary files between steps
    - Large plugin ecosystem
  - Gulp;
    - In-Memory streams
    - Fast
    - Code over configuration
    - Large plugin ecosystem
  - npm Scripts (http://bit.ly/npmvsgulp).
    - Declared in packed.json
    - Leverage your OS's command line
    - Directly use npm packages
    - Call separate Node scripts
    - Convention-based pre/post hooks

## Popular Transpilers
- Babel
- Typescript

### Babel configuration Styles
- .babelrc || package.json

### Babel Transpiler
-create a .babelrc file
```
{
    "presets": [
        "latest"
    ]
}
```

### Use ES6 modules transpiled by Babel

# Bundlers
- Require JS
  - first popular bundler
- Browserify
  - The first bundler to reach mass adoption
- Webpack
  - Bundles more than just JS
- Rollup
  - Tree shaking
    - eliminates code that you are not using
    - start-up faster
    - no hot reloading and code splitting yet

# Source map
Very good way to debbug your code. Just try it.

# Linting
- ESLint
- JSHint
- JSLint
## Configuring ESLint
- Config. format;
- Wich built-in rules?;
- Warnings or erros?.
- Which plugins?;
- Use preset instead?.
- Use watch to evaluate your script every time you hit save.

# Testing and Continuous Integration
## Unit test decision
 - Framework
  - Mocha
 - Assertion Library
  - Chai
 - Helper Libraries
  - JSDOM
 - Where to run tests
  - Node
 - Where to place tests
  - Alongside
 - When to run tests
  - Upon Save

## Top 6 Testing Framework
 - Mocha
 - Jasmine
 - Tape
 - QUnit
 - AVA
 - Jest
### Assertion Library
 - Chai
 - Should.js
 - Npm expect
### Helper information
 - JSDOM
 - Cheerio
### Where to Run Tests
 - Browser
  - Karma, Testem
 - Headless Browser
  - PhantomJS
 - In-memory DOM
  - JSDOM
---
## Continuous Integration
### Continuous Integration tools
 - Travis CI (Linux based)
 - Appveyor (Windows based)
 - Jenkins
 - CicleCI
 - Semaphore
 - SnapCI
 ### Appveyor
  - The appveyor needs the "appveyor.yml" file to configure the parameters that are necessaries to run the CI integration.

# Http Calls
## Http Call Aproaches
 - Node
  - http
  - request
 - Browser
  - XMLHttpRequest
  - JQuery
  - Fetch
 - Node & Browser
  - isomorphic-fetch
  - xhr
  - SuperAgent
  - Axios

### Using Axios
Example:
```
axios({
  url: 'http://your-api.com/user',
  method: 'post',
  headers: {
    'Content-type': 'text/html; charset=UTF-8'},
    data: text
}).then(onSuccess, onError)
```

## Centralize API Calls
# 1 Spot
- Configure all calls at the same place
- Handle preloader logic
- Single seam for mocking

# Mocking HTTP

- Nock
- api-mock
- JSON server
- JSON schema faker
- Browsersync
- Express

## Planning the Mock Http
 - Declare our schema
  - JSON Schema Faker
   - https://github.com/json-schema-faker/json-schema-faker
   - http://json-schema-faker.js.org/#gist/682f97a2e28e230b51810c55b92f4cdc)
 - Generate Random Data:
  - Faker.js (https://github.com/marak/Faker.js/)
  - Chance.js (https://chancejs.com/)
  - Randexp.js
 - Serve Data via API
  - JSON Server (https://github.com/typicode/json-server)
## Mocker library
 - JSON Schema (json-schema.org)
## Creating the mock structure
 - create the file mockDataSchema.js inside the buildScripts
 - create the flie generateMockData.js inside the same folder
 - create the file baseUrl.js
## Delete a User Metod
 - create a new method at the userApi.js file
 ```
export function deleteUser(id) {
    return del(`users/${id}`);
}
 ```

# Production Build
 - Create the "webpack.config.prod.js" file;
 - Insert the pluggins you will need Uglify and Dedupe (remove duplicate file generate at the bundle), for example.

## Create you build structure
 - Create a new file at "buildScript", called build.js

## Referencing Bundled Assets in HTML
 - Hard coded: ``` <script scr="budlle.js"></script> ```
 - Nodejs
 - html-webpack-plugin

# Error logging (this is a very important tool to consider)
 - TrackJS (https://trackjs.com/)
 - Sentry
 - New Relic
 - Raygun

# Want inspiration?
 - andrewfarmer.com/start-project (react starter project)
 - Development environment
 - Boilerplate
 - Starter kit
 - Starter project
 - Seed

Thanks Cory House!
