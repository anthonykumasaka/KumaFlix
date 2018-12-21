# README
KumaFlix is an inspired clone of NetFlix, utilizing videos I created during my time as the videographer and editor for grammy-nominated artist Ryan Leslie. Users of Kumaflix are able to create accounts, search and stream videos, as well as add videos to their 'My List'. Kumaflix was created with React, Redux, and Rails. Below is a live link to Kumaflix as well as breif segments on the technologies used. 

[KUMAFLIX LIVE DEMO](https://kumaflix.herokuapp.com/#/login)

![alt text](https://github.com/anthonykumasaka/KumaFlix/blob/master/app/assets/images/Readme_assets/readme_video_index.png)

## TECHNOLOGIES
KumaFlix's frontend was written in JavaScript, using the Redux framework and React library. The backend was written in Ruby, using Ruby on Rails. 

## FEATURES
### User Authentication
![alt text](https://github.com/anthonykumasaka/KumaFlix/blob/master/app/assets/images/Readme_assets/login.png)

User authentication is handled with rails' controllers and models. Via user input, a password digest and session token are generated each time a user signs up/signs in. When they logout of the site, their session token is reset. User's passwords are never saved to the db to ensure the security of the user. 

### Video Streaming
![alt text](https://github.com/anthonykumasaka/KumaFlix/blob/master/app/assets/images/Readme_assets/Screen%20Shot%202018-12-21%20at%202.41.48%20PM.png)

Videos and photos are stored remotely via Amazon Web Services. Through associations, these media files are implemented into the application. Videos are played through the html video tag. 


