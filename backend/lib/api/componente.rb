require 'grape'
require_relative '../negocio/componente'

module ImjoiasGrape
  # Mercadoria
  class Componente < Grape::API
    resource :componentes do
      get do
        Negocio::Componente.todos
      end
    end
  end
end
