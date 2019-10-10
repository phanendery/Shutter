class AddIndextoJoins < ActiveRecord::Migration[5.2]
  def change
    add_index :picture_to_folders, [:folder_id,:picture_id], unique: true
  end
end
