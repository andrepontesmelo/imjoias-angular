require 'grape'
require_relative '../bd/pessoa'
module ImjoiasGrape
  # Rest API Example
  class Pessoa < Grape::API
    resource :pessoas do
      get do
        BD::Pessoa.todas
      end
    end
  end
end
