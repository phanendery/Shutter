# == Schema Information
#
# Table name: pictures
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  pic_name    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  camera      :text
#  lens        :text
#  focal       :text
#  description :text
#  folder_id   :integer
#

class Picture < ApplicationRecord
    validates :pic_name, :user_id, presence: true
    belongs_to :user
    # belongs_to :folder, optional: :true   
    has_one_attached :photo
    has_many :likes
    has_many :comments

     has_many :joins,
    primary_key: :id,
    foreign_key: :picture_id,
    class_name: :PictureToFolder

    has_many :folders, 
    # optional: :true,
    through: :joins
    
    has_many :likers,
    through: :likes,
    source: :user

   
end
