class PolygonPost
    include Mongoid::Document
    include geojson;

    field :title, type: String
    field :body, type: geojson

    has_many :comments, dependent: :destroy
  end