class AddToPicturesTwo < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :description, :text
  end
end
