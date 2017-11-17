class CreateTodoLists < ActiveRecord::Migration[5.0]
  def change
    create_table :todo_lists do |t|
      t.string :list_title, null: false
      t.string :list_description
      t.integer :board_id, null: false

      t.timestamps
    end

    add_index :todo_lists, :board_id
  end
end
