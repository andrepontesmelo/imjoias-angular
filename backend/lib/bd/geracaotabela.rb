require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # GaracaoTabela
    class GeracaoTabela < Entidade
      def self.todas
        bd[:geracaotabela].all
      end

      def self.obtem(data)
        bd[:geracaotabela].where(data: data)
      end

      def self.gera(funcionario, ouro, juros)
        args = [funcionario, ouro, juros]
        bd.call_sproc('gerartabela', args: args)
      end
    end
  end
end
