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

class Board < ApplicationRecord
  validates :board_title, :user, presence: true


  # associations
  belongs_to :user
  has_many :todolists
  # has_many :todos, through: :todolists
end