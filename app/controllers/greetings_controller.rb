class GreetingsController < ApplicationController
  def index
    @random_greeting = Greeting.all.sample
    render json: { greeting: @random_greeting&.message }
  end
end
