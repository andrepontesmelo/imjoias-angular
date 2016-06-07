require 'grape'
require_relative '../negocio/pessoa'
module ImjoiasGrape
  # Rest API Example
  class Pessoa < Grape::API
    resource :pessoas do
      get do
        Negocio::Pessoa.todas
      end
    end
  end
end
