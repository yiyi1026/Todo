# == Schema Information
#
# Table name: todos
#
#  id           :integer          not null, primary key
#  todo_title   :string           not null
#  todo_comment :string
#  list_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
