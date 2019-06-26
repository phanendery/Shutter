class Api::LikesController < ApplicationController
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.picture_id = params[:picture_id]
        if @like.save
            @picture = Picture.find(@like.picture_id)
            @user = User.find(@like.user_id)

            render :show
        else
             render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(picture_id: params[:picture_id])
        if @like
            @like.destroy
            @picture = Picture.find(@like.picture_id)
            @user = User.find(@like.user_id)
            render :show
        else
            render ["Like does not exist!"], status: 422
        end
    end

    # private

    # def like_params
    #     params.require(:like).permit(:user_id, :picture_id)
    # end 
end
