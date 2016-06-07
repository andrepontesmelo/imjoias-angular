require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module Negocio
    # Pessoa
    class Pessoa < Entidade
      def self.todas
        bd.fetch('select p.codigo, p.nome, min(l.nome) as cidade from pessoa p
                  join endereco e on p.codigo=e.pessoa join localidade l
                  on e.localidade=l.codigo group by p.codigo').all
      end
    end
  end
end
