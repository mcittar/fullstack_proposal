Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :projects, only: [:create, :show, :edit, :destroy, :index]
    resources :tags, only: [:index]
    resources :contributions, only: [:create]
    resources :searches, only: [:index]
    resources :comments, only: [:create]
  end

end
