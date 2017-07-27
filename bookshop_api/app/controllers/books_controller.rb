class BooksController < ApplicationController
  def index
    if params[:author_id]
     books = Author.find(params[:author_id]).books
    else
     books = Book.all
    end
    render json: books.as_json(json_config)
  end


  def show
		render json: Book.find(params[:id])
  end


  def destroy
    book = Book.find(params[:id])

    if book.destroy!
      render :json => {status: :success}
    else
      render :json => {status: :delete_failed}
    end
  end


  private
  def json_config
    return {
      except: [:created_at, :updated_at, :author_id],
      include: {
        author: { only: :name }
      }
    }
  end
end
