class Book < ActiveRecord::Base
  has_many :orders
  has_many :customers, through: :orders
  belongs_to :author
end
