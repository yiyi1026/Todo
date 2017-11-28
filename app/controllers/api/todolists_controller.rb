class Api::TodolistsController < ApplicationController
  def show
    @todolist = TodoList.find(params[:id])
    render :show
  end

  def index
    @todolists = TodoList.where(board_id: params[:board_id])
    render :index
  end
end
