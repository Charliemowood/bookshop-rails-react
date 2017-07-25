# Task

Use Ruby on Rails to build a backend with APIs and the front end frame React to render the content.

## Brief

### Charlie's Czech Bookshop

The owner of Charlie's Czech Bookshop, wants an app which will help him keep on top of his store's inventory. The customers will not see the app, the purpose is that that the site will be used to check stock levels and see what needs to order soon.

You should be able to add stock, which should add author and book information as well as the quantity available.

### MVP:

- Create books with the quantity that are in stock
- Create authors
- Show an inventory page listing book and authors
- Show a stock level for the inventory items e.g. High/Medium/Low

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

Music listened to during the making of the project:

DARIO D''ATTIS - SAD STORY FEAT. AOIDE