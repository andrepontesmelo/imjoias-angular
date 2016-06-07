require 'grape'
require_relative '../negocio/setor'
require_relative '../negocio/faixa'

module ImjoiasGrape
  # Mercadoria
  class Setor < Grape::API
    resource :setores do
      get do
        Negocio::Setor.todos
      end

      namespace ':atendimento' do
        get do
          Negocio::Setor.todos_atendimento
        end
      end
    end

    resource :setor do
      namespace ':codigo' do
        params do
          requires :codigo, type: Integer
        end

        get do
          setor = Negocio::Setor.obter(params[:codigo])
          setor[:faixas] = Negocio::Faixa.obter(params[:codigo])
          setor
        end
      end
    end
  end
end
