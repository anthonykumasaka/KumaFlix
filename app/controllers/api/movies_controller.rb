class Api::MoviesController < ApplicationController
  before_action :require_logged_in 

  def show 
    @movie = Movie.find(params[:id])
  end 

  def index 
    @movies = Movie.all 
    # @movies = Movie.find_by(params[:title])
  end 

end 

