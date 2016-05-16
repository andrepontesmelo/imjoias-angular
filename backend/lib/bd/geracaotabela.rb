require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # GaracaoTabela
    class GeracaoTabela < Entidade
      def self.todas
        bd[:geracaotabela].all
      end
    end
  end
end
