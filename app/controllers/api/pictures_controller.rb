class Api::PicturesController < ApplicationController
    def index
        @pictures = Picture.all
        p @pictures;
        render :index
    end

    def create
        @picture = Picture.new(picture_params)
        if @picture.save
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

    def update
         @picture = Picture.find(params[:id])
        #  @picture[:folder_id] = nil if params[:folder_id].blank?

        # if params[:folder_id].blank?
        #     @picture[:folder_id] = nil
        #     debugger 
        #     if @picture.save
        #         render :show
        #     else
        #         render json: @picture.errors.full_messages, status: 422
        #     end
        
        # else
        #     if @picture.update(picture_params)
        #         render :show
        #     else 
        #         render json: @picture.errors.full_messages, status: 422
        #     end
        # end
            if @picture.folder_id != picture_params[:folder_id]
                # debugger
            end

            if @picture.update(picture_params)
                render :show
            else 
                render json: @picture.errors.full_messages, status: 422
            end

    end

    private

    def picture_params
        params.require(:picture).permit(:pic_name,:description, :camera, :lens, :focal, :user_id, :photo, :folder_id)
    end
end