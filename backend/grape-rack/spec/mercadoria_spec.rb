require 'spec_helper'
# Testes - Mercadoria
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

    it 'Deve-se usar singular para encontrar uma mercadoria' do
      get "/api/#{app.version}/mercadorias/10100101127"
      expect(last_response.status).to eq(404)
    end

    it 'Deve retornar uma mercadorias pela referência' do
      get "/api/#{app.version}/mercadoria/10100101127"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)

      expect(mercadoria).to include('referencia')
      expect(mercadoria).to include('peso')
      expect(mercadoria).to include('nome')
      expect(mercadoria).to include('digito')
    end

    it 'Deve retornar lista de componentes de custo de mercadorias.' do
      get "/api/#{app.version}/mercadorias/componentes"
      expect(last_response.status).to eq(200)
      componente = JSON.parse(last_response.body)[0]

      expect(componente).to include('codigo')
      expect(componente).to include('nome')
      expect(componente).to include('valor')
    end

    it 'Deve retornar lista de componentes de custo de uma mercadoria.' do
      get "/api/#{app.version}/mercadoria/50901310900/componentes"
      expect(last_response.status).to eq(200)
      componente = JSON.parse(last_response.body)[0]

      expect(componente).to include('componentecusto')
      expect(componente).to include('quantidade')
    end

    it 'Deve retornar lista de componentes dentro de uma mercadoria.' do
      get "/api/#{app.version}/mercadoria/50901310900"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)

      expect(mercadoria).to include('componentes')
    end
  end
end
