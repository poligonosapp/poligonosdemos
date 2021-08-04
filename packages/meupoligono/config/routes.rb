Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # https://stackoverflow.com/questions/9178097/routing-error-no-route-matches
  get "polygons" => "polygons#map"
  # GET /polygons/1
  get '/polygons/:id', to: 'polygons#show'
  get '/polygons/:id', to: 'polygons#show', as: 'polygon'
  # intiliaze constant
  # def @polygon = new Polygon(1);
  # @polygon = Polygon.find(params[:id])
  # unexpeted <
  #   <%= link_to 'Polygon', polygon_path(@polygon) %>
  resources :polygons, only: [:index, :show] do
    namespace :api do
      namespace :v1 do
        resources :polygons, only: [:index, :show]
      end
    end
  end

  resource :polygon, only: [:show, :update, :destroy]

  resolve("Polygon") { route_for(:polygon) }
end
