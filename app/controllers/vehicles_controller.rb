class VehiclesController < ApplicationController 
    rescue_from ActiveRecord::RecordNotFound, with: :response_not_found 
    skip_before_action :authorized, only: :index

    def index 
        vehicle = Vehicle.all 
        render json: vehicle 
    end 

    def show 
        vehicle = Vehicle.find(params[:id]) 
        render json:vehicle
    end 

    def create 
        vehicle = Vehicle.create!(vehicle_params) 
        render json:vehicle, status: :created
    end 

    def update 
        vehicle = Vehicle.find(params[:id]) 
        vehicle.update!(vehicle_params) 
        render json:vehicle
    end 

    def destroy 
        vehicle = Vehicle.find(params[:id]) 
        vehicle.destroy
        render json:vehicle
    end

    private
    def response_not_found 
        render json: { error: "vehicle not found"   },status: :not_found
    end 

    private 

    def vehicle_params 
        params.permit( :date_bought, :registration_number, :image_url, :user_id ) 
    end

end
