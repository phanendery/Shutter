class AddFoldertoPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :folder_id, :integer
    add_index :pictures, [:user_id,:folder_id], unique: true
  end
end
