ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

# Active Support Test
module ActiveSupport
  # Test case
  class TestCase
    fixtures :all
  end
end
