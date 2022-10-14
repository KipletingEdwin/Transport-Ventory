class UsersController < ApplicationController 
rescue_from ActiveRecord::RecordNotFound,with: :response_not_found
# skip_before_action :authorized, only: :create 

    def index 
        render json:User.all
    end 

    def show 
        current_user = User.find(session[:user_id]) 
        render json:current_user
    end  
    

    def create 
        user = User.create!(user_params) 
        if user.valid?
            session[:user_id] = user.id 
            render json:user 
        else
            render json: { errors: user.errors.full_messages },status: :unprocessable_entity

        end
    end


    private

    def response_not_found 
        render json: {  error: "User not found" }, status: :not_found
    end

    private

    def user_params 
        params.permit(:email, :password) 
    end
end
