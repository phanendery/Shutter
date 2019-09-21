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

require 'test_helper'

class PictureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
