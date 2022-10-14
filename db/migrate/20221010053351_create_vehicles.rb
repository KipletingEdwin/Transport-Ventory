class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :date_bought
      t.string :registration_number
      t.string :image_url 
      t.integer :user_id

      t.timestamps
    end
  end
end
