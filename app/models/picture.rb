class Picture < ApplicationRecord
    validates :pic_name, :user_id, presence: true
    belongs_to :user
    has_one_attached :photo
    has_many :likes
end
