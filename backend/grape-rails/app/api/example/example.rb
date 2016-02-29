module Example
  # Rest API Example
  class Example < Grape::API
    version 'v1', using: :path
    format :json
    rescue_from :all
    error_formatter :json, lambda { |message, _backtrace, _options, _env|
      {
        status: 'failed',
        message: message,
        error_code: 123
      }
    }

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
