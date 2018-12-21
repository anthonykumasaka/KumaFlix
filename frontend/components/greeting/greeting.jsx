import React from 'react';

const Greeting = ({ currentUser, logout }) => {

  const personalGreeting = () => (
    <hgroup>
      <h2 >Hi, {currentUser.email}!</h2>
      <button onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : null; 
};

export default Greeting;

// The above is from benchBnB
