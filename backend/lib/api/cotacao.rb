require 'grape'
require_relative '../negocio/cotacao'

module ImjoiasGrape
  # Cotacao
  class Cotacao < Grape::API
    resource :cotacao do
      namespace ':cotacao' do
        params do
          requires :cotacao, type: Integer
        end

        resource :ultima do
          get do
            Negocio::Cotacao.obter_ultima(params[:cotacao])
          end
        end
      end
    end
  end
end
