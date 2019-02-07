Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :movies, only: [:show, :index]
    resources :lists, only: [:show]
    resources :list_items, only: [:create, :destroy, :show, :index]
  end
  root "static_pages#root"
end
