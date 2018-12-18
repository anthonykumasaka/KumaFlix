import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/App';
import {login} from './actions/session_actions'; 


document.addEventListener('DOMContentLoaded', () => {
  let store;

  $(window).scroll(function () {
    $('.header-overlay').css({ 
      opacity: function () {
        var opacity = .3;
        //TODO:
        //Set opacity to a higer value whilst user scrolls
        return opacity;
      }
    });
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

