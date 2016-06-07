require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module Negocio
    # Faixa
    class Faixa < Entidade
      def self.todas
        retorno = []
        bd.fetch('SELECT distinct faixa FROM faixa') do |faixa|
          retorno.push(faixa[:faixa].upcase)
        end

        retorno
      end

      def self.obter(setor)
        bd[:faixa].where(setor: setor).all
      end
    end
  end
end
