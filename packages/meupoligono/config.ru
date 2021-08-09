# This file is used by Rack-based servers to start the application.

require_relative "config/environment"
# Heroku does not support Rack::Sendfile https://devcenter.heroku.com/articles/rack#rack-sendfile
require "nginx";

run Rails.application
Rails.application.load_server
