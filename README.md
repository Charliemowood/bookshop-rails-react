# What is it?

This is a web app to model a bookshop. It uses Ruby on Rails to build a backend with APIs and the front end frame React to render the content.

### Detailed scenario

The owner of Charlie's Czech Bookshop, wants an app which will help him keep on top of his store's inventory. The customers will not see the app, the purpose is that that the site will be used to check stock levels and see what needs to order soon.

### Setup project locally

#### Setup rails backend

1. Clone project and change directory into project.
    ```git clone git@github.com:Charliemowood/bookshop-rails-react.git && cd bookshop-rails-react```
2. Change directory into rails part of the part of the project.
    ```cd bookshop_api```
2. Install all gems needed.
    ```bundle install```
3. Migrate the datebase:
    ```rake db:migrate```
4. Seed the database:
    ```rake db:seed```
5. Start up the server that runs the API, keep running:
    ```rails server -p 5000```

#### Setup up React Front end

1. From root of project change directory into React part of the project:
    ```cd react```
2. Install necessary packages from npm. 
    ```npm install```
3. Run webpack in new terminal window:
    ```npm run build```
4. Run server in new terminal window: 
    ```node server.js```
5. Navigate to server in your favorite browser:
    ```localhost:3000```
    
To ensure that the app will function you will need to use one of the following addons and enable CORS. 
https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/ </br>
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

### Interacting with the Bookshop API

The API is json based built using Ruby on Rails.

Example request, to perform a GET request returning the INDEX of current books.
```bash
localhost:3000/api/books
```

Output of request:
```json
[
 {
  "id": 39,
  "title": "Biggles Flies North",
  "price": 10,
  "img": "placeholder",
  "stock": 30,
  "status": "low",
  "author": {
  "name": "Enid Blyton"
 }
},
 {
  "id": 40,
  "title": "Five Run Away",
  "price": 7,
  "img": "placeholder",
  "stock": 3,
  "status": "high",
  "author": {
  "name": "WE Johns"
 }
},
 {
  "id": 41,
  "title": "The ship that flew",
  "price": 20,
  "img": "placeholder",
  "stock": 10,
  "status": "medium",
  "author": {
  "name": "Hilda Lewis"
 }
}
]
```
