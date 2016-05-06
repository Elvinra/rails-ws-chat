class MessageController < WebsocketController

  def new
    broadcast_message :new_message, {:text => message[:text]}
  end
end