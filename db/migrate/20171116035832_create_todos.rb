class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :todo_title, null: false
      t.string :todo_comment
      t.integer :list_id, null: false

      t.timestamps
    end

    add_index :todos, :list_id
  end
end
