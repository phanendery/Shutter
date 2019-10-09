# == Schema Information
#
# Table name: picture_to_folders
#
#  id         :bigint           not null, primary key
#  picture_id :integer          not null
#  folder_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PictureToFolder < ApplicationRecord
    belongs_to :folder
    belongs_to :picture
end
