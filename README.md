# README
KumaFlix is an inspired clone of NetFlix, utilizing videos('movies') I created during my time as the videographer and editor for grammy-nominated artist Ryan Leslie. Users of Kumaflix are able to create accounts, search and stream videos, as well as add videos to their 'My List'. Kumaflix was created with React, Redux, and Rails. Below is a live link to Kumaflix as well as breif segments on the technologies used. 

[KUMAFLIX LIVE DEMO](https://kumaflix.herokuapp.com/#/login)

![alt text](https://github.com/anthonykumasaka/KumaFlix/blob/master/app/assets/images/Readme_assets/readme_video_index.png)

## TECHNOLOGIES
KumaFlix's frontend was written in JavaScript, using the Redux framework and React library. The backend was written in Ruby, using Ruby on Rails. 

## FEATURES
### User Authentication

User authentication is handled with rails' controllers and models. Via user input, a password digest and session token are generated each time a user signs up/signs in. When they logout of the site, their session token is reset. User's passwords are never saved to the db to ensure the security of the user. 

### Video Streaming
Videos and photos are stored remotely via Amazon Web Services. Through associations, these media files are implemented into the application. Videos are played through the html video tag. 





### Movie index carousel

All movies are acessible on the movies index page via a sliding carousel. When a movie's thumbnail is selected 



The app's sliding carousel leverages the power and simplicity of jQuery's DOM manipulation for its sliding movement. On hover, each of the slides inside the carousel expands to show more information about that slide's video. This expanding effect is achieved through the CSS ':hover' selector.

When a user clicks on one of the slides in a carousel, a larger block of information appears below that carousel. Though at first it seemed easier for each slide to have its own expanding block, I quickly realized that attaching the expanding block to each slide, in addition to being slightly less performant, compromised the expanding hover effect of each individual slide. For those reasons, I determined that placing a single expanding block below each carousel was the best way to solve these issues and display the necessary information. Each time a slide is clicked, the expanding block is populated with the information for that slide.

To stream videos, this app makes use of Video.js's player framework. Custom settings were added to the default Video.js player merely by editing the player's CSS file.

Both signing up and signing in are displayed in a single form handled by the 'SessionForm' component. The SessionFormContainer checks whether the current path is '/login' or '/signup' and passes that information down to the SessionForm.

In the SessionFormContainer file:
