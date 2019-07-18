class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.picture_id = params[:picture_id]
        
        if @comment.save
            render :show
        else
            ender json: @comment.errors.full_messages, status: 422 
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy

        render json: {}
    end

    private

    def comment_params
        params.require(:comment).permit(:comment)
    end
end
