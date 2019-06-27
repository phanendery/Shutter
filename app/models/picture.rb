class Picture < ApplicationRecord
    validates :pic_name, :user_id, presence: true
    belongs_to :user
    has_one_attached :photo
    has_many :likes
    has_many :comments
    
    has_many :likers,
    through: :likes,
    source: :user
end
