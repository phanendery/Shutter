class CreatePictureToFolders < ActiveRecord::Migration[5.2]
  def change
    create_table :picture_to_folders do |t|
      t.integer :picture_id, null: false
      t.integer :folder_id, null: false
      t.timestamps
    end
  end
end
