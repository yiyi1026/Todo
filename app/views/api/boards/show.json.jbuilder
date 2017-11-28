json.partial! "api/boards/board", board: @board
json.todolists @board.todolists, partial: 'api/todolists/todolist', as: :todolist