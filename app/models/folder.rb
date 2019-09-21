# == Schema Information
#
# Table name: folders
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Folder < ApplicationRecord
    validates :name, presence: true
    belongs_to :user
    has_many :pictures
end
