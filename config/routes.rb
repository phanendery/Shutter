Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create,:update]
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy, :show]
    resources :pictures, only: [:index,:create,:show,:destroy] do
        resources :likes, only: [:create]
        delete "likes", to: "likes#destroy"
        resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy]
  end
end
