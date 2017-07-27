# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.delete_all
Customer.delete_all
Book.delete_all
Order.delete_all

customer1 = Customer.create({name: "Garry"})
customer2 = Customer.create({name: "Ben"})
customer3 = Customer.create({name: "Emma"})

author1 = Author.create({name: "Enid Blyton", genre: "children"})
author2 = Author.create({name: "WE Johns", genre: "children"})
author3 = Author.create({name: "Hilda Lewis", genre: "children"})

book1 = Book.create({
  title: "Biggles Flies North",
  price: 10,
  img: "placeholder",
  stock: 30,
  status: "low",
  author: author2
  })


book2 = Book.create({
  title: "Five Run Away",
  price: 7,
  img: "placeholder",
  stock: 3,
  status: "high",
  author: author1
  })


book3 = Book.create({
  title: "The Ship that Flew",
  price: 20,
  img: "placeholder",
  stock: 10,
  status: "medium",
  author: author3
  })

book4 = Book.create({
  title: "Biggles Sweeps The Desert",
  price: 11,
  img: "placeholder",
  stock: 5,
  status: "high",
  author: author2
  })

book5 = Book.create({
  title: "Biggles Foreign Legionaire",
  price: 11,
  img: "placeholder",
  stock: 5,
  status: "high",
  author: author2
  })



Order.create({customer: customer1, book: book1})
Order.create({customer: customer2, book: book1})
Order.create({customer: customer3, book: book2})
Order.create({customer: customer2, book: book2})
