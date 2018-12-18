import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/App';
import {login} from './actions/session_actions'; 


document.addEventListener('DOMContentLoaded', () => {
  let store;

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 10) {
  //     $('.header-overlay').css("opacity", 0);
  //   }
  //   else {
  //     $('.header-overlay').css("opacity", 1);
  //   }
  // });

  window.addEventListener("scroll", (e) => {
    const header = document.getElementsByClassName("navbar-flex");
    if (header.length > 0) {
      if (window.scrollY !== 0) {
        header[0].classList.add('fade-header');
      } else {
        header[0].classList.remove('fade-header');
      }
    }
  });


  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});

