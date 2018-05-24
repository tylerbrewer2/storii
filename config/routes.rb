Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'home#index'

  get '/', to: 'home#index'
  resources :test, only: [:index, :create, :show]
end
