class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_index "folders", name: "index_folders_on_user_id"
  end
end
