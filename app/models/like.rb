# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  picture_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, uniqueness: {scope: :picture_id} #this is so use can like picture more than once if unliked

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    belongs_to :picture,
    class_name: :Picture,
    foreign_key: :picture_id

end
