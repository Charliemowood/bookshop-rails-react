class BooksController < ApplicationController
  def index
    @books = Book.all
    render json: @books.as_json({except: [:created_at, :updated_at]})
  end

  def show
		render json: Book.find(params[:id])
	end
end
