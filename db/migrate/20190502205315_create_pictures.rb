class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.integer :user_id, null: false
      t.string :pic_name, null: false
      t.timestamps
    end
     add_index :pictures, :user_id
  end
 
end
