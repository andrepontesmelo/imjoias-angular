require_relative 'db_connection'

module ImjoiasGrape
  module DB
    # Mercadoria
    class Mercadoria
      def all
        db = DBConnection.instance.connection
        db[:mercadoria].all
      end

      def get(referencia)
        db = DBConnection.instance.connection
        db[:mercadoria][referencia: referencia]
      end
    end
  end
end
