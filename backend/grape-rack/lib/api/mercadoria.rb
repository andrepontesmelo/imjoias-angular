require 'grape'
require_relative '../db/mercadoria'
require_relative '../db/componente'

module ImjoiasGrape
  # Mercadoria
  class Mercadoria < Grape::API
    resource :mercadoria do
      namespace ':referencia' do
        params do
          requires :referencia, type: String
        end

        get do
          mercadoria = DB::Mercadoria.new.get(params[:referencia])
          mercadoria[:componentes] = DB::Componente.new.get(params[:referencia])
          mercadoria
        end

        resource :componentes do
          get do
            DB::Componente.new.get(params[:referencia])
          end
        end
      end
    end

    resource :mercadorias do
      get do
        DB::Mercadoria.new.all
      end

      resource :componentes do
        get do
          DB::Componente.new.all
        end
      end
    end
  end
end
