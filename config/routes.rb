# == Route Map
#
#                       Prefix Verb   URI Pattern                                                       Controller#Action
#     api_user_board_todolists GET    /api/users/:user_id/boards/:board_id/todolists(.:format)          api/todolists#index {:format=>:json}
#                              POST   /api/users/:user_id/boards/:board_id/todolists(.:format)          api/todolists#create {:format=>:json}
#  new_api_user_board_todolist GET    /api/users/:user_id/boards/:board_id/todolists/new(.:format)      api/todolists#new {:format=>:json}
# edit_api_user_board_todolist GET    /api/users/:user_id/boards/:board_id/todolists/:id/edit(.:format) api/todolists#edit {:format=>:json}
#      api_user_board_todolist GET    /api/users/:user_id/boards/:board_id/todolists/:id(.:format)      api/todolists#show {:format=>:json}
#                              PATCH  /api/users/:user_id/boards/:board_id/todolists/:id(.:format)      api/todolists#update {:format=>:json}
#                              PUT    /api/users/:user_id/boards/:board_id/todolists/:id(.:format)      api/todolists#update {:format=>:json}
#                              DELETE /api/users/:user_id/boards/:board_id/todolists/:id(.:format)      api/todolists#destroy {:format=>:json}
#              api_user_boards GET    /api/users/:user_id/boards(.:format)                              api/boards#index {:format=>:json}
#                              POST   /api/users/:user_id/boards(.:format)                              api/boards#create {:format=>:json}
#           new_api_user_board GET    /api/users/:user_id/boards/new(.:format)                          api/boards#new {:format=>:json}
#          edit_api_user_board GET    /api/users/:user_id/boards/:id/edit(.:format)                     api/boards#edit {:format=>:json}
#               api_user_board GET    /api/users/:user_id/boards/:id(.:format)                          api/boards#show {:format=>:json}
#                              PATCH  /api/users/:user_id/boards/:id(.:format)                          api/boards#update {:format=>:json}
#                              PUT    /api/users/:user_id/boards/:id(.:format)                          api/boards#update {:format=>:json}
#                              DELETE /api/users/:user_id/boards/:id(.:format)                          api/boards#destroy {:format=>:json}
#                    api_users GET    /api/users(.:format)                                              api/users#index {:format=>:json}
#                              POST   /api/users(.:format)                                              api/users#create {:format=>:json}
#                 new_api_user GET    /api/users/new(.:format)                                          api/users#new {:format=>:json}
#                edit_api_user GET    /api/users/:id/edit(.:format)                                     api/users#edit {:format=>:json}
#                     api_user GET    /api/users/:id(.:format)                                          api/users#show {:format=>:json}
#                              PATCH  /api/users/:id(.:format)                                          api/users#update {:format=>:json}
#                              PUT    /api/users/:id(.:format)                                          api/users#update {:format=>:json}
#                              DELETE /api/users/:id(.:format)                                          api/users#destroy {:format=>:json}
#                   api_boards GET    /api/boards(.:format)                                             api/boards#index {:format=>:json}
#                              POST   /api/boards(.:format)                                             api/boards#create {:format=>:json}
#                new_api_board GET    /api/boards/new(.:format)                                         api/boards#new {:format=>:json}
#               edit_api_board GET    /api/boards/:id/edit(.:format)                                    api/boards#edit {:format=>:json}
#                    api_board GET    /api/boards/:id(.:format)                                         api/boards#show {:format=>:json}
#                              PATCH  /api/boards/:id(.:format)                                         api/boards#update {:format=>:json}
#                              PUT    /api/boards/:id(.:format)                                         api/boards#update {:format=>:json}
#                              DELETE /api/boards/:id(.:format)                                         api/boards#destroy {:format=>:json}
#                api_todolists GET    /api/todolists(.:format)                                          api/todolists#index {:format=>:json}
#                              POST   /api/todolists(.:format)                                          api/todolists#create {:format=>:json}
#             new_api_todolist GET    /api/todolists/new(.:format)                                      api/todolists#new {:format=>:json}
#            edit_api_todolist GET    /api/todolists/:id/edit(.:format)                                 api/todolists#edit {:format=>:json}
#                 api_todolist GET    /api/todolists/:id(.:format)                                      api/todolists#show {:format=>:json}
#                              PATCH  /api/todolists/:id(.:format)                                      api/todolists#update {:format=>:json}
#                              PUT    /api/todolists/:id(.:format)                                      api/todolists#update {:format=>:json}
#                              DELETE /api/todolists/:id(.:format)                                      api/todolists#destroy {:format=>:json}
#            api_session_index POST   /api/session(.:format)                                            api/session#create {:format=>:json}
#                  api_session DELETE /api/session/:id(.:format)                                        api/session#destroy {:format=>:json}
#                         root GET    /                                                                 static_pages#root
# 

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :boards
    resources :todolists
  end



 root "static_pages#root"
  
end
