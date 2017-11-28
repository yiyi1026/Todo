class Api::BoardsController < ApplicationController
  def index
    @boards = Board.where(user_id: params[:user_id])
    render :index
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end
end
