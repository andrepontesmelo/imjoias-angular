require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # Setor
    class Setor < Entidade
      def self.todos
        bd[:setor].all
      end

      def self.obter(codigo)
        bd[:setor][codigo: codigo]
      end

      def self.todos_atendimento
        bd[:setor].where(atendimento: true).all
      end
    end
  end
end
