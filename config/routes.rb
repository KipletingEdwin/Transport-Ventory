Rails.application.routes.draw do 

  resources :users
  resources :vehicles 

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create' 
  get '/me', to: 'users#show'
  get '/auth', to: 'users#show' 
  get '/vehicle', to: 'vehicles#index' 
  delete '/logout', to: 'sessions#destroy'
  post '/vehicle', to: 'vehicles#create'
  delete '/vehicles', to: 'vehicles#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
