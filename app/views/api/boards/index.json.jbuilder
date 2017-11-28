json.array! @boards do |board|
  json.extract! board, :board_title, :board_description

end