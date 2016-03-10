require_relative 'db_connection'

module ImjoiasGrape
  module DB
    # Componentes de custo
    class Componente
      def all
        db = DBConnection.instance.connection
        db[:componentecusto].all
      end

      def get(referencia)
        db = DBConnection.instance.connection
        db[:vinculomercadoriacomponentecusto].where(mercadoria: referencia).all
      end
    end
  end
end
