class WebsocketController < WebsocketRails::BaseController
  before_filter :action

  def action
    send_message :event_name, "BLAHBLAh"
  end
end