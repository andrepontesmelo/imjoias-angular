require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # Mercadoria
    class Mercadoria < Entidade
      attr_accessor :referencia

      def initialize(referencia)
        @referencia = referencia
      end

      def self.todas
        bd[:mercadoria].all
      end

      def atualizar(entidades)
        mercadoria = entidades[:mercadoria]
        componentes = entidades[:componentes]
        referencia = mercadoria[:referencia]

        bd.transaction do
          bd[:mercadoria].where(referencia: referencia).update(mercadoria)
          bd[:vinculomercadoriacomponentecusto]
            .where(mercadoria: referencia).delete
          componentes.map do |key, _value|
            bd[:vinculomercadoriacomponentecusto].insert(key)
          end
        end
      end

      def obter
        bd[:mercadoria][referencia: referencia]
      end

      def novos_precos
        bd.call_sproc 'lerParametrosGeracaoPrecos'
        bd[:novosPrecos][mercadoria: referencia]
      end

      def novos_precos_varejo
        bd.call_sproc 'lerParametrosGeracaoPrecos'
        bd[:novosPrecosVarejo][mercadoria: referencia]
      end
    end
  end
end
