# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Board.delete_all
TodoList.delete_all
Todo.delete_all

# user
guest1 = User.create!({username: 'Mario', email: 'guest1@guest.com', password: 'guest1', description: 'the princess saver', avatar: 'user_1.png'})


board1 = Board.create!({board_title:'board1', board_description:'description1', user_id: guest1.id})


todolist1 = TodoList.create!({list_title:'listtitle', list_description:'listdescription', board_id: board1.id})

todo1 = Todo.create!({todo_title:'todotitle', todo_comment:'todocomment', list_id: todolist1.id})