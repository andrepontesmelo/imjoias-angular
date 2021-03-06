require 'sequel'
require 'mysql2'
require 'singleton'
require 'logger'

module ImjoiasGrape
  module Negocio
    # Conexao MySQL
    class Conexao
      include Singleton
      @db = nil

      def conexao
        if @db.nil?
          @db = Sequel.connect(adapter: 'mysql2',
                               max_connections: 10,
                               user: 'root',
                               password: '',
                               host: '127.0.0.1',
                               database:  'imjoias',
                               loggers: [Logger.new($stdout)])

          @db.convert_tinyint_to_bool = false
        end

        @db
      end
    end
  end
end
