


import React from 'react';
import Profile from './Profile/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        fullName="ZAKARIA SAIDI"
        bio="Experienced full stack developer with 5+ years of experience in developing web applications using HTML, CSS, JavaScript, Node. js, React. js and MongoDB. Seeking to leverage my skillset and expertise to help XYZ Company achieve their objectives and create innovative solutions."
        profession="Developer"
        handleName={() => alert('Hello zakaria saidi')}
      >
        https://source.unsplash.com/200x200/?profile
      </Profile>
    </div>
  );
}

export default App;

