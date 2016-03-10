require_relative 'db_connection'

module ImjoiasGrape
  module DB
    # Pessoa
    class Pessoa
      def all
        db = DBConnection.instance.connection
        db.fetch('select p.codigo, p.nome, min(l.nome) as cidade from pessoa p
                  join endereco e on p.codigo=e.pessoa join localidade l
                  on e.localidade=l.codigo group by p.codigo').all
      end
    end
  end
end
