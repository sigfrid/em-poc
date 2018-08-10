class DashboardController < ApplicationController

  def show
    @states = State.all
    @cities = City.all
  end
end
