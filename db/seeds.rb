puts "📃 Seeding data..."

User.create(email: 'john@gmail.com', password_digest: 'john' ) 
User.create(email: 'peter@gmail.com', password_digest: 'peter' ) 
User.create(email: 'mike@gmail.com', password_digest: 'mike' ) 
User.create(email: 'dean@gmail.com', password_digest: 'dean' ) 
User.create(email: 'gabriel@gmail.com', password_digest: 'gabriel' ) 


Vehicle.create( date_bought: " 28/11/2020", registration_number: "KCY 140X", user_id:1,  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHiWTSN9V0b9pIPDNq4nq9CrTlMpZzgXfdeSs2cXz&s")
Vehicle.create( date_bought: " 8/1/2010", registration_number: "KBA 430OL", user_id:2, image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFy26dgvqQ1eQtNKx8MN3HNUhF34lnxVruBDWVsKj&s")
Vehicle.create( date_bought: " 20/7/2020", registration_number: "KCZ 338X", user_id:3,  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfG9034n_WS0hBIhQLRE74OaAT9o90rTuJE_qjkBT&s")
Vehicle.create( date_bought: " 4/4/2022", registration_number: "KDG 940F", user_id:1,  image_url:"https://pictures-kenya.jijistatic.com/32547881_MTQ1My0yMDQ4LWY2YTA0NTE4ZWQ.jpg")
Vehicle.create( date_bought: " 1/7/2021", registration_number: "KCW 382H", user_id:2, image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZpi7EwhED6-oh_OD4WRQ62DSdfvZnzz9HR2xeZVG&s")
Vehicle.create( date_bought: " 28/11/2020", registration_number: "KCD 007A",user_id:3,  image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6CXUZkxnBeFhiOrkM1Zgk9ZpQ2H7kh2xRd-ei8AZjQ&s")
Vehicle.create( date_bought: " 28/11/2020", registration_number: "KDA 998Z",user_id:1,  image_url:"https://media.jumiadeals.com/ke_live/f5b360f9bb5e1f61f7ec0c4.mobile-gallery-large.jpg")
Vehicle.create( date_bought: " 4/4/2022", registration_number: "KDG 940F", user_id:9,  image_url:"https://pictures-kenya.jijistatic.com/32547881_MTQ1My0yMDQ4LWY2YTA0NTE4ZWQ.jpg")
Vehicle.create( date_bought: " 1/7/2021", registration_number: "KCW 382H", user_id:9, image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZpi7EwhED6-oh_OD4WRQ62DSdfvZnzz9HR2xeZVG&s")


puts "✅ Done seeding"
