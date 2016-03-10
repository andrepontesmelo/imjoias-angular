require 'sequel'
require 'mysql2'
require 'singleton'
require 'logger'

module ImjoiasGrape
  module DB
    # MySQL Connections
    class DBConnection
      include Singleton
      @db = nil

      def connection
        if @db.nil?
          @db = Sequel.connect(adapter: 'mysql2',
                               max_connections: 10,
                               user: 'root',
                               password: '',
                               host: '127.0.0.1',
                               database:  'imjoias',
                               loggers: [Logger.new($stdout)])
        end

        @db
      end
    end
  end
end
