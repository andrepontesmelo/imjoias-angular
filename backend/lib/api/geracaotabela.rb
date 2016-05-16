require 'grape'
require_relative '../bd/geracaotabela'
module ImjoiasGrape
  # Geracao de tabela de precos
  class GeracaoTabela < Grape::API
    resource :geracaotabela do
      get do
        BD::GeracaoTabela.todas
      end

      desc 'Deleta uma geracao de tabela'
      params do
        requires :data, type: DateTime
      end
      delete ':data' do
        BD::GeracaoTabela.obtem(params[:data]).delete
      end

      desc 'Gera a tabela de precos'
      params do
        requires :funcionario, type: Integer
        requires :ouro, type: Float
        requires :juros, type: Float
      end
      post do
        BD::GeracaoTabela.gera(params[:funcionario],
                               params[:ouro], params[:juros])
      end
    end
  end
end
