class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 403
    end

  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :session_token)
  end

end
