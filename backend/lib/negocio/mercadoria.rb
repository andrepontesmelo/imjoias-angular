require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module Negocio
    # Mercadoria
    class Mercadoria < Entidade
      def self.todas
        bd[:mercadoria].all
      end

      def atualizar(mercadoria, componentes)
        referencia = entidadeSequel[:referencia]

        bd.transaction do
          bd[:mercadoria].where(referencia: referencia).update(mercadoria)

          bd[:vinculomercadoriacomponentecusto]
            .where(mercadoria: referencia).delete

          componentes.each do |componente|
            bd[:vinculomercadoriacomponentecusto].insert(
              mercadoria: referencia,
              componentecusto: componente.componentecusto,
              quantidade: componente.quantidade
            )
          end
        end
      end

      def self.obter(referencia)
        retorno = Mercadoria.new
        retorno.entidadeSequel = bd[:mercadoria][referencia: referencia]

        retorno
      end

      def novos_precos
        bd.call_sproc 'lerParametrosGeracaoPrecos'
        precos = bd[:novosPrecos][mercadoria: entidadeSequel[:referencia]]
        precos['novoValorAtacado'] = precos[:novoIndiceAtacado] * Cotacao.atacado[:valor]

        precos
      end

      def novos_precos_varejo
        bd.call_sproc 'lerParametrosGeracaoPrecos'
        bd[:novosPrecosVarejo][mercadoria: entidadeSequel[:referencia]]
      end
    end
  end
end
