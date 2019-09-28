class RemoveIndexfromPictures < ActiveRecord::Migration[5.2]
  def change
    remove_index "pictures", name: "index_pictures_on_user_id_and_folder_id"
  end
end
