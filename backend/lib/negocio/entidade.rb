module ImjoiasGrape
  module Negocio
    # Base para entidades do banco de dados.
    class Entidade
      attr_accessor :entidadeSequel

      def self.bd
        Conexao.instance.conexao
      end

      def bd
        Conexao.instance.conexao
      end
    end
  end
end
