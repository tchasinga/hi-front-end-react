Rails.application.routes.draw do
  # root to: "api/v1/greetings#index"
  root 'root#index'
  namespace :api do
    namespace :v1 do
      get '/index', to: 'greetings#index'
    end
  end


end
