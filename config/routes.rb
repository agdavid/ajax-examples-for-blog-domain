Rails.application.routes.draw do
  resources :comments
  resources :blogs do 
    resources :comments, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
