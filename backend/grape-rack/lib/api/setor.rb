require 'grape'
require_relative '../bd/setor'
require_relative '../bd/faixa'

module ImjoiasGrape
  # Mercadoria
  class Setor < Grape::API
    resource :setores do
      get do
        BD::Setor.todos
      end

      namespace ':atendimento' do
        get do
          BD::Setor.todos_atendimento
        end
      end
    end

    resource :setor do
      namespace ':codigo' do
        params do
          requires :codigo, type: Integer
        end

        get do
          setor = BD::Setor.obter(params[:codigo])
          setor[:faixas] = BD::Faixa.obter(params[:codigo])
          setor
        end
      end
    end
  end
end
