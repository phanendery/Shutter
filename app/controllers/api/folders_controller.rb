class Api::FoldersController < ApplicationController

    def index 
        @folders = current_user.folders
        # debugger
        render :index
    end

    def create
        @folder = Folder.new(folder_params)
        @folder.user_id = current_user.id
        # debugger
        if @folder.save
            render :show
        else
            render json: @folder.errors.full_messages, status: 422
        end
    end

    def show 
        @folder =  Folder.includes(:pictures).find(params[:id])
        if @folder
            render :show
        else
            render json: {errors: "Folder not found"},  status: 422
        end
    end

    def update
        @folder = Folder.find(params[:id])
        if @folder.update(folder_params)
            render :show
        else
            render json: @folder.errors.full_messages, status: 422
        end
    end
    
    def destroy

        @folder = Folder.find(params[:id])
        # debugger
        @folder.destroy
        @folders = current_user.folders
        render :index
    end

    private 

    def folder_params
        params.require(:folder).permit(:name)
    end
end
