require 'spec_helper'
# Testes - Setores
module ImjoiasGrape
  describe 'GET /api/v1/setores/' do
    include Rack::Test::Methods
    def app
      ImjoiasGrape::API
    end

    it 'Deve retornar lista de setores' do
      get "/api/#{app.version}/setores"
      expect(last_response.status).to eq(200)
      setor = JSON.parse(last_response.body)[0]

      expect(setor).to include('codigo')
      expect(setor).to include('nome')
      expect(setor).to include('atendimento')
    end

    it 'Deve obter setores por código' do
      get "/api/#{app.version}/setor/1"
      expect(last_response.status).to eq(200)
      setor = JSON.parse(last_response.body)

      expect(setor).to include('codigo')
      expect(setor).to include('nome')
      expect(setor).to include('atendimento')
    end

    it 'Deve retornar as faixas de um setor' do
      get "/api/#{app.version}/setor/1"
      expect(last_response.status).to eq(200)
      setor = JSON.parse(last_response.body)

      expect(setor).to include('faixas')
    end

    it 'Deve retornar os setores de atendimento' do
      get "/api/#{app.version}/setores/atendimento"
      expect(last_response.status).to eq(200)
      setor = JSON.parse(last_response.body)[0]

      expect(setor['atendimento']).to eq(true)
    end
  end
end
