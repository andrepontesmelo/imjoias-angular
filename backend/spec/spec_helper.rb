require 'rack/test'
require_relative('../lib/api/api')

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  def string_aleatoria(tamanho)
    (0...tamanho).map { ('a'..'z').to_a[rand(26)] }.join
  end
end
