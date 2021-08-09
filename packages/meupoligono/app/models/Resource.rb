# https://www.infoq.com/articles/rest-introduction/
# https://guides.rubyonrails.org/active_record_postgresql.html#geometric-types

require 'tzinfo'

require "open-uri"
require "json"
require "rgeo"
require "rgeo-geojson"
# require 'rgeo/geo_json'


class Resource {
    Resource(URI u);
    Response get(){

        #rgeo
        # require "open-uri"
        # require "json"
        # require "rgeo"
        # require "rgeo-geojson"

        my_lat, my_lng = [45, 5]
        my_position = RGeo::Cartesian.
          factory.
          point(my_lng, my_lat)

        geojson = URI.
          open("https://git.io/rhone-alpes.geojson").
          read
        rhone_alpes = RGeo::GeoJSON.decode(geojson).geometry

        if rhone_alpes.contains?(my_position)
            puts "Let's ski ⛷"
        end
        # rgeo-geojson

        # require 'rgeo/geo_json'

        str1 = '{"type":"Point","coordinates":[1,2]}'
        geom = RGeo::GeoJSON.decode(str1)
        geom.as_text              # => "POINT (1.0 2.0)"

        str2 = '{"type":"Feature","geometry":{"type":"Point","coordinates":[2.5,4.0]},"properties":{"color":"red"}}'
        str2 = '{
       "type": "Feature",
       "bbox": [-10.0, -10.0, 10.0, 10.0],
       "geometry": {
           "type": "Polygon",
           "coordinates": [
               [
                   [-10.0, -10.0],
                   [10.0, -10.0],
                   [10.0, 10.0],
                   [-10.0, -10.0]
               ]
           ]
       }
   }'
        feature = RGeo::GeoJSON.decode(str2)
        feature['color']          # => 'red'
        feature.geometry.as_text  # => "POINT (2.5 4.0)"

        hash = RGeo::GeoJSON.encode(feature)
        return hash.to_json == str2      # => true

    };
    Response post(Request r);
    Response put(Request r);
    Response delete();
}