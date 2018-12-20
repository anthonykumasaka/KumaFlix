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
m1 = Movie.create!(title: 'Ryan Leslie - Black Flag', description: 'Official music video for Black Flag by Ryan Leslie', genre: 'Music Video', year: 2013); 
m1_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/RLES_black_flag_music_video.mp4');
m1.video.attach(io: m1_video, filename: 'black_flag_music_video'); 
m1_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/RLES_black_flag_fire_photo.png');
m1.photo.attach(io: m1_photo, filename: 'RLES_black_flag_fire_photo.png');

m9 = Movie.create!(title: 'YLTI - Glass Wata', description: 'Official music video for Glass Wata by YLTI', genre: 'Music Video', year: 2018); 
  m9_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/YLTI_glassa_wata_trailer_video.mov');
  m9.video.attach(io: m9_video, filename: 'YLTI_glass_wata_video'); 
  m9_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/YLTI_glassa_watta_photo.png');
  m9.photo.attach(io: m9_photo, filename: 'YLTI_glass_wata_photo'); 

m2 = Movie.create!(title: 'Pearl Black', description: 'Official music video for Pearl Black by Mursa', genre: 'Music Video', year: 2017); 
  m2_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/MURSA_pearl_black_trailer_video.mov');
  m2.video.attach(io: m2_video, filename: 'MURSA_pearl_black_trailer_video.mov'); 
  m2_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/MURSA_black_pearl_photo.png');
  m2.photo.attach(io: m2_photo, filename: 'MURSA_black_pearl_photo.jpg'); 
  # m2_photo_2 = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/MURSA_black_pearl_photo.png');
  # m2.photo.attach(io: m2_photo_2, filename: 'MURSA_black_pearl_photo.png'); 
m7 = Movie.create!(title: 'Talib Kweli - Oustanding', description: 'Official music video for Outstanding by Talib Kweli and Ryan Leslie', genre: 'Music Video', year: 2012); 
  m7_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/TALIBKWELI_outstanding_music_video.mp4');
  m7.video.attach(io: m7_video, filename: 'TALIBKWELI_outstanding_photo'); 
  m7_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/TALIBKWELI_outstanding_photo.png');
    m7.photo.attach(io: m7_photo, filename: 'TALIBKWELI_outstanding_video'); 
  
m3 = Movie.create!(title: 'Anthoy Kumasaka Video Reel', description: 'Video reel by Anthony Kumasaka', genre: 'Music Video', year: 2013); 
  m3_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/AK_reel.mp4');
  m3.video.attach(io: m3_video, filename: 'AK_reel'); 
  m3_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/AK_reel_photo.png');
  m3.photo.attach(io: m3_photo, filename: 'AK_reel_photo'); 

m4 = Movie.create!(title: 'Fabolous - Ready', description: 'A promo video for the song Ready by Fabolous featuring Kevin Hard and Jessica White', genre: 'Music Video', year: 2013); 
  m4_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/Fabolous_ready_music_video.mp4');
  m4.video.attach(io: m4_video, filename: 'FABOLOUS_read_video'); 
  m4_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/FABOLOUS_read_photo.png');
  m4.photo.attach(io: m4_photo, filename: 'FABOLOUS_ready_photo'); 
  
m8 = Movie.create!(title: 'Whipped Cream - Ignorant', description: 'Official music video for Ignorant by Whipped Cream', genre: 'Music Video', year: 2017); 
  m8_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/WC_ignorant_music_video.mp4');
  m8.video.attach(io: m8_video, filename: 'WC_ignorant_video'); 
  m8_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/WC_ignorant_photo.png');
  m8.photo.attach(io: m8_photo, filename: 'WC_ignorant_photo'); 

m5 = Movie.create!(title: 'Min - Korea', description: 'A recap video of Ryan Leslies time in Korea featuring Min', genre: 'Music Video', year: 2013); 
  m5_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/Min_korea_music_video.mp4');
  m5.video.attach(io: m5_video, filename: 'MIN_korea_video'); 
  m5_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/MIN_koread_photo.png');
  m5.photo.attach(io: m5_photo, filename: 'MIN_korea_photo'); 

m6 = Movie.create!(title: 'Ryan Leslie - Carnival of Venice', description: 'Official music video for Carnival of Venice by Ryan Leslie', genre: 'Music Video', year: 2013); 
  m6_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/RLES_carnival_of_venice_music_video.mp4');
  m6.video.attach(io: m6_video, filename: 'RLES_carnival_of_venice_video'); 
  m6_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/RLES_carnival_of_venice_photo.png');
  m6.photo.attach(io: m6_photo, filename: 'RLES_carnival_of_venice_photo'); 

m10 = Movie.create!(title: 'Zak Downtown - Element', description: 'Official music video for Element by Zak Downtown', genre: 'Music Video', year: 2017); 
  m10_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/ZD_element_music_video.mov');
  m10.video.attach(io: m10_video, filename: 'ZD_element_video'); 
  m10_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/ZD_element_photo.png');
  m10.photo.attach(io: m10_photo, filename: 'ZD_element_photo'); 

m11 = Movie.create!(title: 'Zak Downtown - Wiz Khalifa', description: 'Official music video for Wiz Khalifa by Zak Downtown', genre: 'Music Video', year: 2017); 
  m11_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/ZD_whiz_khalifa_performance_video.mov');
  m11.video.attach(io: m11_video, filename: 'ZD_wiz_khalifa_video'); 
  m11_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/ZD_whiz_khalifa_photo.png');
  m11.photo.attach(io: m11_photo, filename: 'ZD_wiz_khalifa_photo'); 


# performance videos: 
p2 = Movie.create!(title: 'Hucci - Spring Awakening Festival (live)', description: 'Hucci perfoming live at Spring Awakening Festival (Chicago)', genre: 'performance', year: 2017); 
p2_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/HUCCI_spring_awakening_festival_performance_video.mp4');
p2.video.attach(io: p2_video, filename: 'HUCCI_spring_awakening_video');
p2_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/HUCCI_spring_awakening_photo.png');
p2.photo.attach(io: p2_photo, filename: 'HUCCI_spring_awakening_photo'); 

p1 = Movie.create!(title: 'Ryan Leslie - Joan of Arc (live)', description: 'Ryan leslie performing Joan of Arc in Seattle', genre: 'performance', year: 2012); 
  p1_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/RLES_joan_of_arc_performance_video.mp4');
  p1.video.attach(io: p1_video, filename: 'RLES_joan_of_arc_performance_video');
  p1_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_joan_of_arc_photo.png');
  p1.photo.attach(io: p1_photo, filename: 'RLES_joan_of_arc_photo'); 

p6 = Movie.create!(title: 'Ryan Leslie - Carnival of Venice (live)', description: 'Ryan leslie performing Carnival of Venice at Irving Plaza in NY', genre: 'performance', year: 2013); 
  p6_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/RLES_carnival_of_venice_performance_video.mp4');
  p6.video.attach(io: p6_video, filename: 'RLES_carnival_of_venice_video');
  p6_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_irving_plaza_photo.png');
  p6.photo.attach(io: p6_photo, filename: 'RLES_carnival_of_venice_photo'); 

p10 = Movie.create!(title: 'Whipped Cream - Genesis', description: 'Whipped Cream Genesis tour promo', genre: 'performance', year: 2018); 
  p10_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/WC_genesis_performance_video.mp4');
  p10.video.attach(io: p10_video, filename: 'WC_genesis_video');
  p10_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/WC_genesis_photo.png');
  p10.photo.attach(io: p10_photo, filename: 'WC_genesis_photo'); 

  
  p4 = Movie.create!(title: 'Ryan Leslie - Black Flag (live)', description: 'Ryan leslie performing The Black Flag in Davis', genre: 'performance', year: 2012); 
  p4_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/RLES_black_flag_performance_video.mp4');
  p4.video.attach(io: p4_video, filename: 'RLES_black_flag_video');
  p4_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_black_flag_performance_photo.png');
  p4.photo.attach(io: p4_photo, filename: 'RLES_black_flag_photo'); 
  
p7 = Movie.create!(title: 'Ryan Leslie - Sizzle Reel', description: 'Ryan leslie 2013 Sizzle Reel', genre: 'performance', year: 2013); 
  p7_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/RLES_sizzle_reel_performance_video.mp4');
  p7.video.attach(io: p7_video, filename: 'RLES_sizzle_reel_video');
  p7_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_sizzle_reel_photo.png');
  p7.photo.attach(io: p7_photo, filename: 'RLES_sizzle_reel_photo'); 

p3 = Movie.create!(title: 'Jordan Comolli - Live in Rotterdam', description: 'Jordan Comolli live in Rotterdam', genre: 'performance', year: 2018); 
  p3_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/JC_rotterdam_performance_video.mp4');
  p3.video.attach(io: p3_video, filename: 'JC_rotterdam_video');
  p3_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/JC_rotterdam_photo.png');
  p3.photo.attach(io: p3_photo, filename: 'JC_rotterdam_photo'); 

p8 = Movie.create!(title: 'Ryan Leslie - Black Mozart Tour', description: 'Ryan leslie 2014 Black Mozart Tour', genre: 'performance', year: 2014); 
  p8_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/RLES_black_mozart_tour_promo_performance_video.mp4');
  p8.video.attach(io: p8_video, filename: 'RLES_tour_video');
  p8_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_tour_promo_photo.png');
  p8.photo.attach(io: p8_photo, filename: 'RLES_tour_photo'); 

p5 = Movie.create!(title: 'Ryan Leslie - Black Mozart (live)', description: 'Ryan leslie performing Black Mozart in Stockton, CA', genre: 'performance', year: 2013); 
  p5_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/RLES_black_mozart_stockton_performance_video.mp4');
  p5.video.attach(io: p5_video, filename: 'RLES_black_mozart_video');
  p5_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_black_mozart_performance_photo.png');
  p5.photo.attach(io: p5_photo, filename: 'RLES_black_mozart_photo'); 


p9 = Movie.create!(title: 'Talib Kweli - Outstanding (live)', description: 'Talib Kweli perfomring Outstanding featuring Ryan Leslie', genre: 'performance', year: 2013); 
  p9_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/TK_outstanding_performance_video.mp4');
  p9.video.attach(io: p9_video, filename: 'TK_outstanding_video');
  p9_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/TK_outstanding_photo.png');
  p9.photo.attach(io: p9_photo, filename: 'TK_outstanding_photo'); 


p11 = Movie.create!(title: 'Zak Downtwon - Spring Awakening (live)', description: 'Zak Downtown perfoming live at Spring Awakening Festival (Chicago)', genre: 'performance', year: 2017); 
  p11_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Performance_Videos/ZD_spring_awakening_performance_video.mp4');
  p11.video.attach(io: p11_video, filename: 'ZD_spring_awakening_video');
  p11_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/ZD_spring_awakening_photo.png');
  p11.photo.attach(io: p11_photo, filename: 'ZD_spring_awakening_photo'); 


# animation videos: 
a1 = Movie.create!(title: 'The Kingdom of Akio - trailer', description: 'The original trailer for The Kingdom of Akio (2013)', genre: 'animation', year: 2013); 
  a1_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Animation_Videos/KOA_trailer_animation_video.mp4');
  a1.video.attach(io: a1_video, filename: 'KOA_trailer_1_video'); 
  a1_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_trailer_1_photo.png');
  a1.photo.attach(io: a1_photo, filename: 'KOA_trailer_1_photo'); 

a2 = Movie.create!(title: 'The Kingdom of Akio - trailer 2', description: 'The Kingdom of Akio trailer (2014)', genre: 'animation', year: 2014); 
  a2_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Animation_Videos/KOA_sia_animation_video.mov');
  a2.video.attach(io: a2_video, filename: 'KOA_trailer_2_photo');
  a2_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/THEKINGDOMOFAKIO_sia_photo.png');
  a2.photo.attach(io: a2_photo, filename: 'KOA_trailer_2_photo'); 


a3 = Movie.create!(title: 'The Kingdom of Akio trailer - Releif', description: 'The Kingdom of Akio trailer (2014)', genre: 'animation', year: 2014); 
  a3_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Animation_Videos/KOA_releif_video.mp4');
  a3.video.attach(io: a3_video, filename: 'KOA_releif_video');
  a3_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_releif_photo.png');
  a3.photo.attach(io: a3_photo, filename: 'KOA_releif_photo'); 

a4 = Movie.create!(title: 'The Kingdom of Akio trailer - The Eye of Hiruko', description: 'The Eye of Hiruko (2014)', genre: 'animation', year: 2014); 
  a4_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Animation_Videos/KOA_eye_hiruko_animation_video.mp4');
  a4.video.attach(io: a4_video, filename: 'KOA_eye_hiruko_video');
  a4_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_eye_hiruko_photo.png');
  a4.photo.attach(io: a4_photo, filename: 'KOA_eye_hiruko_photo'); 

a5 = Movie.create!(title: 'The Kingdom of Akio conceptual trailer (3d)', description: 'The Kingdom of Akio 3d conceptual trailer (rough)', genre: 'animation', year: 2015); 
  a5_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Animation_Videos/KOA_3D_video.mp4');
  a5.video.attach(io: a5_video, filename: 'KOA_3d_video');
  a5_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_3d_2_photo.png');
  a5.photo.attach(io: a5_photo, filename: 'KOA_3d_photo'); 
  
a6 = Movie.create!(title: 'The Kingdom of Akio storyboard (2011)', description: 'The Kingdom of Akio storyboard (2011)', genre: 'animation', year: 2011); 
  a6_video = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Animation_Videos/KOA_storyboard_video.mp4');
  a6.video.attach(io: a6_video, filename: 'KOA_storyboard_video');
  a6_photo = open('https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_storyboard_photo.png');
  a6.photo.attach(io: a6_photo, filename: 'KOA_storyboard_photo'); 
