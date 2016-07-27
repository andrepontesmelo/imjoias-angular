require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module Negocio
    # Cotacao
    class Cotacao < Entidade
      def self.obter_ultima(moeda)
        bd[:cotacao].order(Sequel.desc(:data))[moeda: moeda]
      end
    end
  end
end
