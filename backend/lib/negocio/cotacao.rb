require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module Negocio
    # Cotacao
    class Cotacao < Entidade
      def self.atacado
        obter_ultima(1)
      end

      def self.obter_ultima(moeda)
        bd[:cotacao].order(Sequel.desc(:data))[moeda: moeda]
      end
    end
  end
end
