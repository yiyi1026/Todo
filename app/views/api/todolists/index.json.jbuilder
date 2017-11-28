json.array! @todolists do |todolist|
  json.extract! todolist, :id, :list_title, :list_description

end