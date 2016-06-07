require 'grape-entity'

module ImjoiasGrape
    module Entidades
        class GeracaoTabela < Grape::Entity
            format_with(:iso_timestamp) { |dt| dt.iso8601 }

            with_options(format_with: :iso_timestamp) do
              expose :data
            end

            expose :juros
            expose :ouro

            private
              def ouro
                "%f" % "#{object[:ouro]}"
              end

              def juros
                object[:juros] ? "%f" % "#{object[:juros]}" : nil
              end

            end
    end
end
