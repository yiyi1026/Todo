# == Schema Information
#
# Table name: todo_lists
#
#  id               :integer          not null, primary key
#  list_title       :string           not null
#  list_description :string
#  board_id         :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class TodoList < ApplicationRecord
  validates :board, :list_title, presence: true

  # associations
  belongs_to :board
  has_many :todos, class_name: :Todo, foreign_key: :list_id

  def user
    board.user
  end

end
