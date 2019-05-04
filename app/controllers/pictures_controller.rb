class Api::PicturesController < ApplicationController
    def index
        @pictures = Picture.all
        p @pictures;
        render :index
    end

    private

    def picture_params
        params.require(:picture).permit(:pic_name, :user_id);
    end
end