# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user = User.create!(email: 'drkumasaka@kaiser.com', password: 'password'); 


Movie.destroy_all 
# music vieos: 
m1 = Movie.create!(title: 'Ryan Leslie - Black Flag', description: 'Official music video for Black Flag by Ryan Leslie', genre: 'music', year: 2013); 
  m1_attachment = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/RLES_black_flag_music_video.mp4');
  m1.video.attach(io: m1_attachment, filename: 'black_flag_music_video'); 

# performance videos: 
p1 = Movie.create!(title: 'Ryan Leslie - Joan of Arc', description: 'Ryan leslie performing Joan of Arc in Seattle', genre: 'performance', year: 2012); 
  p1_attachment = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/RLES_joan_of_arc_performance_video.mp4');
  p1.video.attach(io: p1_attachment, filename: 'joan_of_arc_performance_video'); 

# animation videos: 
a1 = Movie.create!(title: 'The Kingdom of Akio - trailer', description: 'The original trailer for The Kingdom of Akio', genre: 'animation', year: 2013); 
  a1_attachment = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Animation_Videos/KOA_trailer_animation_video.mp4');
  a1.video.attach(io: a1_attachment, filename: 'the_kingdom_of_akio_trailer')

