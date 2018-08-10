Rails.application.routes.draw do
  resources :samples
  root to: 'samples#index'

   get  'dashboard',  to: 'dashboard#show', as: 'dashboard'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
