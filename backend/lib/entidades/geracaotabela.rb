require 'grape-entity'

module ImjoiasGrape
  module Entidades
    # Entidade Geracao Tabela
    class GeracaoTabela < Grape::Entity
      format_with(:iso_timestamp, &:iso8601)

      with_options(format_with: :iso_timestamp) do
        expose :data
      end

      expose :juros
      expose :ouro

      private

      def ouro
        format('%f', object[:ouro].to_s)
      end

      def juros
        object[:juros] ? format('%f', object[:juros]) : nil
      end
    end
  end
end
