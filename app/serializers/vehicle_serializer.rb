class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :date_bought, :image_url, :registration_number
end
