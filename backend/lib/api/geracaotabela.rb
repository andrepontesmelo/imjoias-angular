require 'grape'

module ImjoiasGrape
  # Geracao de tabela de precos
  class GeracaoTabela < Grape::API
    resource :geracaotabela do
      get do
        retorno = {}
        retorno
      end
    end
  end
end
