class Api::ProfilesController < ApplicationController
  before_action :require_logged_in 

  def create 
    @profile = Profile.new(profile_params) 
    @profile.user_id = current_user.id 
    if @profile.save 
      render 'api/profiles/show'
    else
      render json: @profile.errors.full_messages 
    end  
  end

  def index 
    @profiles = Profile.all 
    render 'api/profiles/index'
  end

  def update 
    @profile = Profile.find(params[:id])
    if @profile.update_attributes(profile_params)
      render 'api/profiles/show'
    else 
      render json: @profile.errors.full_messages
    end 
  end

  def destroy 
    @profile = Profile.find(params[:id])
    if @profile.destroy 
      render 'api/profiles/index'
    else 
      render json: @profile.erros.full_messages
    end 
  end

  private 

  def profile_params 
    params.require(:profile).permit(:username)
  end

end 