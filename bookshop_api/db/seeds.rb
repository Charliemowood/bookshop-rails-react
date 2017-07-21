# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Customer.delete_all
Book.delete_all

customer1 = Customer.create({name: "Garry"})
customer2 = Customer.create({name: "Ben"})
customer3 = Customer.create({name: "Emma"})

book1 = Book.create({
  title: "Biggles Flies North",
  price: 10,
  img: "placeholder",
  stock: 30,
  status: "low"
  })


book2 = Book.create({
  title: "Five Run Away",
  price: 7,
  img: "placeholder",
  stock: 3,
  status: "high"
  })


book3 = Book.create({
  title: "The ship that flew",
  price: 20,
  img: "placeholder",
  stock: 10,
  status: "medium"
  })
