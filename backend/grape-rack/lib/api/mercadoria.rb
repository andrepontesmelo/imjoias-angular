require 'grape'
require_relative '../bd/mercadoria'
require_relative '../bd/componente'
require_relative '../bd/foto'

module ImjoiasGrape
  # Mercadoria
  class Mercadoria < Grape::API
    resource :mercadoria do
      namespace ':referencia' do
        params do
          requires :referencia, type: String
        end

        get do
          mercadoria = BD::Mercadoria.new(params[:referencia])
          retorno = mercadoria.obter
          retorno[:componentes] = BD::Componente.obter(params[:referencia])
          retorno[:novosPrecos] = mercadoria.novos_precos
          retorno[:novosPrecosVarejo] = mercadoria.novos_precos_varejo
          retorno[:possuiFoto] = BD::Foto.possuiFoto(params[:referencia])
          retorno
        end

        resource :componentes do
          get do
            BD::Componente.obter(params[:referencia])
          end
        end

        resource :foto do
          get do
            referencia = params[:referencia]
            content_type 'application/octet-stream'
            header['Content-Disposition'] = "attachment; \
                                            filename=#{referencia}.png"
            env['api.format'] = :binary
            binario = BD::Foto.obter(referencia)
            error! :not_found, 404 if binario.nil?
            binario
          end
        end
      end
    end

    resource :mercadorias do
      get do
        BD::Mercadoria.todas
      end

      resource :componentes do
        get do
          BD::Componente.todos
        end
      end
    end
  end
end
