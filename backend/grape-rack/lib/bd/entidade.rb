module ImjoiasGrape
  module BD
    # Base para entidades do banco de dados.
    class Entidade
      def self.bd
        Conexao.instance.conexao
      end

      def bd
        Conexao.instance.conexao
      end
    end
  end
end
