class Api::V1::GreetingsController < ApplicationController
  def index
    @random_greeting = Greeting.all.sample.message
    render json: { greeting: @random_greeting }
  end
end
