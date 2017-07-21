# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Customer.delete_all

customer1 = Customer.create({name: "Garry"})
customer2 = Customer.create({name: "Ben"})
customer3 = Customer.create({name: "Emma"})
