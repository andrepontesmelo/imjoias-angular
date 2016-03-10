require 'spec_helper'

module ImjoiasGrape
  describe 'GET /api/v1/mercadorias/' do
    include Rack::Test::Methods
    def app
      ImjoiasGrape::API
    end

    it 'Deve retornar lista de mercadorias' do
      get "/api/#{app.version}/mercadorias"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)[0]

      expect(mercadoria).to include('referencia')
      expect(mercadoria).to include('peso')
      expect(mercadoria).to include('nome')
      expect(mercadoria).to include('digito')
    end

    it 'Deve retornar uma mercadorias pela referência' do
      get "/api/#{app.version}/mercadoria/?referencia=10100101127"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)

      expect(mercadoria).to include('referencia')
      expect(mercadoria).to include('peso')
      expect(mercadoria).to include('nome')
      expect(mercadoria).to include('digito')
    end
  end
end
