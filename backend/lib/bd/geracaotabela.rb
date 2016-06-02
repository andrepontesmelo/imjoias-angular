require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # GaracaoTabela
    class GeracaoTabela < Entidade
      def self.todas
        tabelas = bd[:geracaotabela].all

        tabelas.each do | tabela |
          tabela[:data] = tabela[:data].strftime("%Y%m%dT%H:%M:%S")
        end

        tabelas
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
