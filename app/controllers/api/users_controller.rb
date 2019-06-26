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

    def update
        @user = current_user
        if @user.update(update_params)
          render "api/users/show"
        else
          render json: @user.errors.full_messages, status: 422
        end
    end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end 

  def update_params
    params.require(:user).permit(:avatar)
  end
end
