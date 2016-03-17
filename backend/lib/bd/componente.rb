require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # Componentes de custo
    class Componente < Entidade
      def self.todos
        bd[:componentecusto].all
      end

      def self.obter(referencia)
        bd[:vinculomercadoriacomponentecusto].where(mercadoria: referencia).all
      end
    end
  end
end
