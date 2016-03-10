require 'spec_helper'
# Teste - Pessoa
module ImjoiasGrape
  describe 'GET /api/v1/pessoas/' do
    include Rack::Test::Methods
    def app
      ImjoiasGrape::API
    end

    it 'Deve retornar lista de pessoas' do
      get "/api/#{app.version}/pessoas"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)[0]

      expect(mercadoria).to include('nome')
      expect(mercadoria).to include('codigo')
      expect(mercadoria).to include('cidade')
    end
  end
end
