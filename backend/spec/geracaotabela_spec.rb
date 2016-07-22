require 'spec_helper'
# Testes - Mercadoria
module ImjoiasGrape
  describe 'GET /api/v1/geracaotabela/' do
    include Rack::Test::Methods
    def app
      ImjoiasGrape::API
    end

    it 'Lista de gerações de tabela de preço deve retornar data' do
      get "/api/#{app.version}/geracaotabela"
      expect(last_response.status).to eq(200)
      geracoes = JSON.parse(last_response.body)[0]

      expect(geracoes).to include('data')
    end

    it 'Lista de gerações de tabela de preço deve retornar ouro' do
      get "/api/#{app.version}/geracaotabela"
      expect(last_response.status).to eq(200)
      geracoes = JSON.parse(last_response.body)[0]

      expect(geracoes).to include('ouro')
    end

    it 'Lista de gerações de tabela de preço deve retornar juros' do
      get "/api/#{app.version}/geracaotabela"
      expect(last_response.status).to eq(200)
      geracoes = JSON.parse(last_response.body)[0]

      expect(geracoes).to include('juros')
    end

    it 'Deve permitir exclusão de geração de tabela' do
      delete "/api/#{app.version}/geracaotabela/20010101000000"
      expect(last_response.status).to eq(200)
    end

    it 'Deve permitir geração de tabela' do
      body = { funcionario: 300_001, ouro: 140, juros: 2.8 }
      post "/api/#{app.version}/geracaotabela/",
           body.to_json, 'CONTENT_TYPE' => 'application/json'

      expect(last_response.status).to eq(201)
    end
  end
end
