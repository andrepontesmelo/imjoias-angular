require 'grape'
require_relative '../negocio/geracaotabela'
module ImjoiasGrape
  # Geracao de tabela de precos
  class GeracaoTabela < Grape::API
    resource :geracaotabela do
      get do
        tabelas = Negocio::GeracaoTabela.todas
        present tabelas, with: Entidades::GeracaoTabela
      end

      desc 'Deleta uma geracao de tabela'
      params do
        requires :data, type: DateTime
      end
      delete ':data' do
        Negocio::GeracaoTabela.obtem(params[:data]).delete
      end

      desc 'Gera a tabela de precos'
      params do
        requires :funcionario, type: Integer
        requires :ouro, type: Float
        requires :juros, type: Float
      end
      post do
        Negocio::GeracaoTabela.gera(params[:funcionario],
                                    params[:ouro], params[:juros])
      end
    end
  end
end
