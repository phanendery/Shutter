class AddToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :camera, :text
    add_column :pictures, :lens, :text
    add_column :pictures, :focal, :text
  end
end
