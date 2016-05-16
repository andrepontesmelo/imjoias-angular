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
    end
  end
end
