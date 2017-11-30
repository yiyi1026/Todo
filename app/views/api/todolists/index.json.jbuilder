@todolists.each do |todolist|
  json.set! todolist.id do
    json.partial! 'todolist', todolist: todolist
  end
end