require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module Negocio
    # Componentes de custo
    class Componente < Entidade
      def self.todos
        bd[:componentecusto].all
      end

      def self.obter(referencia)
        retorno = []
        vinculos_bd = bd[:vinculomercadoriacomponentecusto]
                      .where(mercadoria: referencia).all

        vinculos_bd.each do |vinculo_bd|
          retorno.push(componentecusto: vinculo_bd[:componentecusto],
                       quantidade: vinculo_bd[:quantidade])
        end

        retorno
      end
    end
  end
end
