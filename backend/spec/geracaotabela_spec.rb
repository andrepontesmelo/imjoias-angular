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
  end
end
