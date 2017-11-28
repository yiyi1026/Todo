json.partial! "api/users/user", user: @user

json.boards @user.boards, partial: 'api/boards/board', as: :board