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

    it 'Deve retornar uma mercadoria pela referência' do
      get "/api/#{app.version}/mercadoria/10100101127"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)['mercadoria']

      expect(mercadoria).to include('referencia')
      expect(mercadoria).to include('peso')
      expect(mercadoria).to include('nome')
      expect(mercadoria).to include('digito')
    end

    it 'Deve retornar uma mercadoria com dígito númerico' do
      get "/api/#{app.version}/mercadoria/10100101127"
      expect(last_response.status).to eq(200)
      digito = JSON.parse(last_response.body)['mercadoria']['digito']

      expect(digito).to be(6)
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

    it 'Deve retornar novos preços de uma mercadoria.' do
      get "/api/#{app.version}/mercadoria/50901310900"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)

      expect(mercadoria).to include('novosPrecos')
    end

    it 'Deve retornar novo índice de atacado.' do
      get "/api/#{app.version}/mercadoria/50901310900"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)
      novosPrecos = mercadoria['novosPrecos']

      expect(novosPrecos).to include('novoIndiceAtacado')
    end

    it 'Deve retornar novo valor em real de atacado.' do
      get "/api/#{app.version}/mercadoria/50901310900"
      expect(last_response.status).to eq(200)
      mercadoria = JSON.parse(last_response.body)
      novosPrecos = mercadoria['novosPrecos']

      expect(novosPrecos).to include('novoValorAtacado')
    end

    it 'Deve retornar todos os componentes de custo.' do
      get "/api/#{app.version}/mercadorias/componentes"
      expect(last_response.status).to eq(200)
      componente = JSON.parse(last_response.body)[0]

      expect(componente['codigo']).not_to be_empty
      expect(componente['nome']).not_to be_empty
      expect(componente['valor']).not_to be_nil
    end

    it 'Deve retornar todas as faixas.' do
      get "/api/#{app.version}/mercadorias/faixas"
      expect(last_response.status).to eq(200)
      faixas = JSON.parse(last_response.body)

      expect(faixas).to include 'A'
      expect(faixas).to include 'B'
      expect(faixas).to include 'C'
    end

    it 'Deve alterar nome de uma mercadoria' do
      nome_aleatorio = string_aleatoria(10)

      put "/api/#{app.version}/mercadoria/10000101035", {'mercadoria':{'referencia':'10000101035','nome': nome_aleatorio, 'teor':250,'peso':22,'faixa':'H','grupo':'','digito':'true','foradelinha':'true','depeso':'false'},'componentes':[{'componentecusto':'32','quantidade':25}]}

      get "/api/#{app.version}/mercadoria/10000101035"
      mercadoria = JSON.parse(last_response.body)['mercadoria']

      expect(mercadoria['nome']).to eq(nome_aleatorio)
    end

    it 'Deve alterar teor de uma mercadoria' do
      teor_aleatorio = rand(1000)

      put "/api/#{app.version}/mercadoria/10000101035", {'mercadoria':{'referencia':'10000101035','nome': 'Alianca', 'teor':teor_aleatorio, 'peso':22,'faixa':'H','grupo':'','digito':'true','foradelinha':'true','depeso':'false'},'componentes':[{'componentecusto':'32','quantidade':24}]}

      get "/api/#{app.version}/mercadoria/10000101035"
      mercadoria = JSON.parse(last_response.body)['mercadoria']

      expect(mercadoria['teor']).to eq(teor_aleatorio)
    end

    it 'Deve alterar peso de uma mercadoria' do
      peso_aleatorio = rand(1000)

      put "/api/#{app.version}/mercadoria/10000101035", {'mercadoria':{'referencia':'10000101035','nome': 'Alianca', 'teor':250, 'peso':peso_aleatorio,'faixa':'H','grupo':'','digito':'true','foradelinha':'true','depeso':'false'},'componentes':[{'componentecusto':'32','quantidade':23}]}

      get "/api/#{app.version}/mercadoria/10000101035"
      mercadoria = JSON.parse(last_response.body)['mercadoria']

      expect(mercadoria['peso']).to eq(peso_aleatorio)
    end

    it 'Deve alterar a faixa de uma mercadoria' do
      put "/api/#{app.version}/mercadoria/10000101035", {'mercadoria':{'referencia':'10000101035','nome': 'Alianca', 'teor':250, 'peso':22,'faixa':'A','grupo':'','digito':'true','foradelinha':'true','depeso':'false'},'componentes':[{'componentecusto':'32','quantidade':22}]}

      get "/api/#{app.version}/mercadoria/10000101035"
      mercadoria = JSON.parse(last_response.body)['mercadoria']

      expect(mercadoria['faixa']).to eq('A')
    end

    it 'Deve alterar o grupo de uma mercadoria' do
      grupo_aleatorio = rand(1000)

      put "/api/#{app.version}/mercadoria/10000101035", {'mercadoria':{'referencia':'10000101035','nome': 'Alianca', 'teor':250, 'peso':250,'faixa':'H','grupo':grupo_aleatorio,'digito':'true','foradelinha':'true','depeso':'false'},'componentes':[{'componentecusto':'32','quantidade':21}]}

      get "/api/#{app.version}/mercadoria/10000101035"
      mercadoria = JSON.parse(last_response.body)['mercadoria']

      expect(mercadoria['grupo']).to eq(grupo_aleatorio)
    end

    it 'Deve poder trocar foradelinha de uma mercadoria' do
      foradelinha = 0

      put "/api/#{app.version}/mercadoria/10000101035", {'mercadoria':{'referencia':'10000101035','nome': 'Alianca', 'teor':250, 'peso':250,'faixa':'H','grupo':'','digito':'true','foradelinha':foradelinha,'depeso':'false'},'componentes':[{'componentecusto':'32','quantidade':20}]}

      get "/api/#{app.version}/mercadoria/10000101035"
      mercadoria = JSON.parse(last_response.body)['mercadoria']

      expect(mercadoria['foradelinha']).to eq(foradelinha)
    end

    it 'Deve poder trocar componentes de custo de uma mercadoria' do
      put "/api/#{app.version}/mercadoria/10000101035", {'mercadoria':{'referencia':'10000101035','nome': 'Alianca', 'teor':250, 'peso':250,'faixa':'H','grupo':'','digito':'true','foradelinha':'false','depeso':'false'},'componentes':[{'componentecusto':'10','quantidade':50}]}

      get "/api/#{app.version}/mercadoria/10000101035"
      componente = JSON.parse(last_response.body)['componentes'][0]

      expect(componente['componentecusto']).to eq('10')
      expect(componente['quantidade']).to eq(50)
    end
  end
end
