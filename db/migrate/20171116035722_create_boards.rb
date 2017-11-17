class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :board_title, null: false
      t.string :board_description
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :boards, :user_id
  end
end
