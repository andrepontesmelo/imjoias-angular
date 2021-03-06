require 'grape'
require_relative '../negocio/mercadoria'
require_relative '../negocio/componente'
require_relative '../negocio/foto'

module ImjoiasGrape
  # Mercadoria
  class Mercadoria < Grape::API
    resource :mercadoria do
      namespace ':referencia' do
        params do
          requires :referencia, type: String
        end

        get do
          retorno = {}
          mercadoria = Negocio::Mercadoria.obter(params[:referencia])
          retorno[:mercadoria] = mercadoria.entidadeSequel
          retorno[:componentes] = Negocio::Componente.obter(params[:referencia])
          retorno[:novosPrecos] = mercadoria.novos_precos
          retorno[:novosPrecosVarejo] = mercadoria.novos_precos_varejo
          retorno[:possuiFoto] = Negocio::Foto.possui_foto(params[:referencia])
          retorno
        end

        desc 'Salva mercadoria e componentes de custo'
        params do
          requires :mercadoria, type: Hash
          requires :componentes, type: Array
        end
        put do
          mercadoria = Negocio::Mercadoria.obter(params[:referencia])
          mercadoria.atualizar(params[:mercadoria], params[:componentes])
          {}
        end

        resource :componentes do
          get do
            Negocio::Componente.obter(params[:referencia])
          end
        end

        resource :foto do
          get do
            referencia = params[:referencia]
            content_type 'application/octet-stream'
            header['Content-Disposition'] = "attachment; \
                    filename=#{referencia}.png"
            env['api.format'] = :binary
            binario = Negocio::Foto.obter(referencia)
            error! :not_found, 404 if binario.nil?
            binario
          end
        end
      end
    end

    resource :mercadorias do
      get do
        Negocio::Mercadoria.todas
      end

      resource :componentes do
        get do
          Negocio::Componente.todos
        end
      end

      resource :faixas do
        get do
          Negocio::Faixa.todas
        end
      end
    end
  end
end
