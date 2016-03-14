require_relative 'conexao'
require_relative 'entidade'

module ImjoiasGrape
  module BD
    # Foto
    class Foto < Entidade
      def self.obter(referencia)
        mercadoria = bd[:foto][mercadoria: referencia]
        return nil if mercadoria.nil?
        mercadoria[:foto].to_s.force_encoding('ISO-8859-1')
      end
    end
  end
end
