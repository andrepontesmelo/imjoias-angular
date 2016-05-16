require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # GaracaoTabela
    class GeracaoTabela < Entidade
      def self.todas
        bd[:geracaotabela].all
      end

      def self.delete(data)
        bd[:geracaotabela].where(data: data).delete
      end
    end
  end
end
