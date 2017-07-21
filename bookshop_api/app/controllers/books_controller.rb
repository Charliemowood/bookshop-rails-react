class BooksController < ApplicationController
  def index
    @books = Book.all
    render json: @books.as_json({except: [:created_at, :updated_at]})
  end
end
