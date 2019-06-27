class Api::PicturesController < ApplicationController
    def index
        @pictures = Picture.all
        p @pictures;
        render :index
    end

    def create
        @picture = Picture.new(picture_params)
        if @picture.save!
            render :show
        else
            render json: @picture.errors.full_messages, status: 422
        end
    end

    def show
        @picture = Picture.includes(:comments).find(params[:id])
    end

    def destroy

        @picture = Picture.find(params[:id])
        @picture.destroy

        render :index
    end

    private

    def picture_params
        params.require(:picture).permit(:pic_name,:description, :camera, :lens, :focal, :user_id, :photo)
    end
end