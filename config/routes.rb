Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create,:update]
    resource :session, only: [:create, :destroy, :show]
    resources :pictures, only: [:index,:create,:show,:destroy] do
        resources :likes, only: [:create]
        delete "likes", to: "likes#destroy"
    end

  end
end
