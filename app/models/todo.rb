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

class Todo < ApplicationRecord
  # associations
  belongs_to :todoList, class_name: :TodoList, foreign_key: :list_id
end
