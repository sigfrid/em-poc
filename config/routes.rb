Rails.application.routes.draw do
  resources :samples
  root to: 'samples#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
