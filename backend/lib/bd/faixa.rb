require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # Faixa
    class Faixa < Entidade
      def self.todos
        bd[:faixa].all
      end

      def self.obter(setor)
        bd[:faixa].where(setor: setor).all
      end
    end
  end
end
