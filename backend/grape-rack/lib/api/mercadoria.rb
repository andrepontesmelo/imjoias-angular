require 'grape'
require_relative '../bd/mercadoria'
require_relative '../bd/componente'

module ImjoiasGrape
  # Mercadoria
  class Mercadoria < Grape::API
    resource :mercadoria do
      namespace ':referencia' do
        params do
          requires :referencia, type: String
        end

        get do
          mercadoria = BD::Mercadoria.new(params[:referencia])
          retorno = mercadoria.obter
          retorno[:componentes] = BD::Componente.obter(params[:referencia])
          retorno[:novosPrecos] = mercadoria.novos_precos
          retorno[:novosPrecosVarejo] = mercadoria.novos_precos_varejo

          retorno
        end

        resource :componentes do
          get do
            BD::Componente.obter(params[:referencia])
          end
        end
      end
    end

    resource :mercadorias do
      get do
        BD::Mercadoria.todas
      end

      resource :componentes do
        get do
          BD::Componente.todos
        end
      end
    end
  end
end
