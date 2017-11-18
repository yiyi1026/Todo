class Api::UsersController < ApplicationController
  def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show" 
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def show
    # user profile page
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    # username is not unique, email is!!!
		params.require(:user).permit(:username, :password, :email)
	end
end
