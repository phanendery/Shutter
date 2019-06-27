class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :picture_id, null: false
      t.text :comment, null: false
      t.index :user_id
      t.index :picture_id
      t.timestamps
    end
  end
end
