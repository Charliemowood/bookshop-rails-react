class CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render json: @customers.as_json({except: [:created_at, :updated_at]})
  end

  def show
    render json: Customer.find(params[:id])
  end
end
