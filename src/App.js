import React from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  const handleLogIn = () => {
    netlifyIdentity.open();
  };

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to React</h2>
      </div>
      <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
        <button onClick={handleLogIn}>Log in with netlify</button>
      </div>
    </div>
  );
}

export default App;
