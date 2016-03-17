require 'grape'
require_relative '../bd/componente'

module ImjoiasGrape
  # Mercadoria
  class Componente < Grape::API
    resource :componentes do
        get do
          BD::Componente.todos
        end
    end
  end
end
