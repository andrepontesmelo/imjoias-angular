module Example
  # Rest API Example
  class Converter < Grape::API
    version 'v1', using: :path
    format :json
    prefix :api
    rescue_from :all

    helpers do
      def get_exchange_rate(currency)
        case currency
        when 'NTD'
          30
        else
          raise ArgumentError, 'No conversion found for currency'
        end
      end
    end

    resource :converter do
      params do
        requires :amount, type: Float
        requires :to_currency, type: String
      end

      http_basic do |email, password|
      	ok = email == 'admin' && password == 'admin';
      	ok
      end

      get :exchange do
        converted = params[:amount] * get_exchange_rate(params[:to_currency])

        {
          amount: converted,
          currency: params[:to_currency]
        }
      end
    end
  end
end
