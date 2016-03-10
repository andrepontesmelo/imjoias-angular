require 'grape'
require_relative '../db/pessoa'

module ImjoiasGrape
  # Rest API Example
  class Pessoa < Grape::API
    resource :pessoas do
      get do
        ImjoiasGrape::DB::Pessoa.new.all
      end
    end
  end
end
