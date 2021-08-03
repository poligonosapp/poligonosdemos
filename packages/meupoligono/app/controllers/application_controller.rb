class ApplicationController < ActionController::Base
    def index
        render json: ApplicationController.all
    end
end
