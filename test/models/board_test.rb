# == Schema Information
#
# Table name: boards
#
#  id                :integer          not null, primary key
#  board_title       :string           not null
#  board_description :string
#  user_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
