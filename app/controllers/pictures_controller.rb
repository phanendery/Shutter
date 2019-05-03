class PicturesController < ApplicationController
    def index
        @pictures = Picture.all
        render :index
    end

    private

    def picture_params
        params.require(:picture).permit(:pic_name, :user_id);
    end
end