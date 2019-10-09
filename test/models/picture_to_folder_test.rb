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

require 'test_helper'

class PictureToFolderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
