require 'grape'
require_relative 'mercadoria'
require_relative 'pessoa'
require_relative 'setor'
require_relative 'componente'

module ImjoiasGrape
  # Classe de entrada da API
  class API < Grape::API
    version 'v1', using: :path
    format :json
    prefix :api
    rescue_from :all

    mount Mercadoria
    mount Pessoa
    mount Setor
    mount Componente
  end
end

