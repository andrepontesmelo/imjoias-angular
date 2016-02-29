require 'grape'
require_relative 'lib/example/converter'

use Rack::Session::Cookie
run Example::Converter
