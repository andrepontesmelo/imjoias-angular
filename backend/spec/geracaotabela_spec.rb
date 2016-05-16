require 'spec_helper'
# Testes - Mercadoria
module ImjoiasGrape
  describe 'GET /api/v1/geracaotabela/' do
    include Rack::Test::Methods
    def app
      ImjoiasGrape::API
    end

    it 'Deve retornar lista de gerações de tabela de preço' do
      get "/api/#{app.version}/geracaotabela"
      expect(last_response.status).to eq(200)
      geracoes = JSON.parse(last_response.body)[0]

      expect(geracoes).to include('data')
      expect(geracoes).to include('funcionario')
      expect(geracoes).to include('ouro')
      expect(geracoes).to include('juros')
    end

    it 'Deve permitir exclusão de geração de tabela' do
      delete "/api/#{app.version}/geracaotabela/20010101000000"
      expect(last_response.status).to eq(200)
    end
  end
end
