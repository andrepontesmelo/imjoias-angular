require_relative 'conexao'
require_relative 'entidade'
require_relative '../entidades/geracaotabela'
require 'grape-entity'
require 'grape'

module ImjoiasGrape
  module Negocio
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
