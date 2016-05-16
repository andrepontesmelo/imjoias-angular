require 'grape'
require_relative '../bd/geracaotabela'
module ImjoiasGrape
  # Geracao de tabela de precos
  class GeracaoTabela < Grape::API
    resource :geracaotabela do
      get do
        BD::GeracaoTabela.todas
      end
    end
  end
end
