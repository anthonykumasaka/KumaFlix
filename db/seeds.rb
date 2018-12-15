# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user = User.create!(email: 'drkumasaka@kaiser.com', password: 'password'); 

m1 = Movie.create!(title: 'There will be blood', description: 'daniel d', genre: 'drama', year: 2002); 

Movie.destroy_all 
movie1 = Movie.new({ title: 'Zak Downtown', description: 'Zones live at Spring Awakening Festival', genre: 'performance', year: 2017});
movie1.thumbnail.attach({io: File.open('/Users/kuma/Desktop/there_will_be_blood.jpg'), filename: 'there_will_be_blood.jpg'});
movie1.video.attach({io: File.open('/Users/kuma/Desktop/movie_test.mp4'), filename: 'movie_test.mp4'}); 

movie1.save! 



movie2 = Movie.new(title: 'ZD', description: 'Live in Chicago', genre: 'performance', year: 2017);
file = EzDownload.open('https://s3-us-west-1.amazonaws.com/kumaflix-dev/movie_test.mp4')
movie2.video.attach(io: file, filename: 'movie_test.mp4');
movie2.save! 