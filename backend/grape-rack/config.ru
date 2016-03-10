require 'grape'
require_relative 'lib/api/api'

use Rack::Session::Cookie
run ImjoiasGrape::API
