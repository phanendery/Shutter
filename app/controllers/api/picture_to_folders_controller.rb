class Api::PictureToFoldersController < ApplicationController

    def index
        @pictureToFolder = PictureToFolder.all
        render :index
    end

    def create
        @pictureToFolder = PictureToFolder.new(picture_to_folder_params)
        if @pictureToFolder.save
            render :show
        else
            render json: @pictureToFolder.errors.full_messages, status: 422
        end
       
    end

    def show
        @pictureToFolder = PictureToFolder.find(params[:id])
        if @pictureToFolder
            render :show
        else
            render json: {errors: "Not Found"}, status: 422
        end
    end

    def destroy
         @pictureToFolder = PictureToFolder.find(params[:id])
         id = @pictureToFolder.id
         if @pictureToFolder
            @pictureToFolder.destroy
            render json: id
         else
            render json: {errors: "Not Found"}, status: 422
         end
         
    end

    private

    def picture_to_folder_params
        params.require(:picture_to_folder).permit(:picture_id,:folder_id)
    end
end
