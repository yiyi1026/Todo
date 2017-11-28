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
  has_many :todolists, 
    class_name: :TodoList, 
    foreign_key: :board_id
    
  has_many :todos, through: :todolists

  def todolistsIds
    self.todolists.map{|list|list.id}
  end
end
