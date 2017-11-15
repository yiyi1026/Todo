# == Route Map
#
#      Prefix Verb   URI Pattern            Controller#Action
#    api_user POST   /api/user(.:format)    api/users#create {:format=>:json}
# api_session GET    /api/session(.:format) api/sessions#show {:format=>:json}
#             DELETE /api/session(.:format) api/sessions#destroy {:format=>:json}
#             POST   /api/session(.:format) api/sessions#create {:format=>:json}
#        root GET    /                      static_pages#root
# 

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end



 root "static_pages#root"
  
end
