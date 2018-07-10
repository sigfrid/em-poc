class InboundController < ActionController::API
  def create
    logger.info " !============! "
    logger.info request.raw_post
    logger.info " ============ "
    logger.info params
    logger.info " ^============^ "
    render plain: 'pong', status: :ok
  end
end


# curl -d "param1=value1&param2=value2" -X POST http://0ceaecf9.ngrok.io/inbound
