require 'spec_helper'
# Teste - Cotacao
module ImjoiasGrape
  describe 'GET /api/v1/cotacao/' do
    include Rack::Test::Methods
    def app
      ImjoiasGrape::API
    end

    it 'Deve retornar ultima cotacao de uma moeda.' do
      get "/api/#{app.version}/cotacao/1/ultima"
      expect(last_response.status).to eq(200)
      cotacao = JSON.parse(last_response.body)

      expect(cotacao).to include('valor')
    end
  end
end
