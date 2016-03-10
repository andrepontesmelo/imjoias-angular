require 'grape'
require_relative '../db/mercadoria'

module ImjoiasGrape
  # Mercadoria
  class Mercadoria < Grape::API
    resource :mercadorias do
      get do
        ImjoiasGrape::DB::Mercadoria.new.all
      end
    end

    resource :mercadoria do
      params do
        requires :referencia, type: String
      end

      get do
        ImjoiasGrape::DB::Mercadoria.new.get(params[:referencia])
      end
    end
  end
end
