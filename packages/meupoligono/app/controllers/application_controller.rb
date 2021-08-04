module Api
    module V1
        class ApplicationController < ActionController::Base
            def index
                render geojson: { sucessful:true }
            end
        end
    end
end
