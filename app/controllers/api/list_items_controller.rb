class Api::ListItemsController < ApplicationController

    before_action :require_logged_in
  
    def create
      @list_item = ListItem.new(list_item_params)
      @list_item.list_id = current_user.list.id
      if @list_item.save
        render "api/list_items/show"
      else
        render json: @list_item.errors.full_messages, status: 422
      end
    end
  
    def index
      @list_items = ListItem.where(:list_id => current_user.list.id)
      render "api/list_items/index"
    end
  
    def destroy
      @list_item = ListItem.find(params[:id])
      @list_item.destroy
    end
  
    def show
      @list_item = ListItem.find(params[:id])
      render "api/list_items/show"
    end
  
    def list_item_params
      params.require(:list_item).permit(:movie_id)
    end
  end