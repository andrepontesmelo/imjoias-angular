require 'grape'
require_relative 'mercadoria'
require_relative 'pessoa'
require_relative 'setor'
require_relative 'componente'
require_relative 'geracaotabela'
require_relative 'cotacao'

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
    mount GeracaoTabela
    mount Cotacao
  end
end
