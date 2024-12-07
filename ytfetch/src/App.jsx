import React, { useState, useEffect } from 'react';
import './App.css';

function App() {




  // ---- Contains users and video links -----------------------

  const navState = {
    KAI: {
      name: 'Kai Cenat',
      values: ['6rtCZySsXiA', '7ueDK8b9JdE', 'KPN_SLB_yA8']
    },

    DUKE: {
      name: 'Duke Denis',
      values: ['rA7V6YuzPgM', '1ZP5DSkOYw0', '5Sm-mZ_EBSg']
    },

    SPEED: {
      name: 'Ishowspeed',
      values: ['8tpisTASqAE', 'dJ8FmiwDknY', 's-fY8QvIgNY', 'Ec18vXsDHYU']
    }
  };



  const [ switchNav, setSwitchNav ] = useState(navState.KAI.name)
  const [ currentVideos, setCurrentVideos ] = useState(navState.KAI.values);
  

  const handleNavChange = (newState) => {
    setSwitchNav(newState.name)
    setCurrentVideos(newState.values);
  }
  
  
  // ---- Determining an active nav button -----------------------
  const isActive = (panel) => {
    if (switchNav === panel) {
        return 'active';
    } else {
        return '';
    }
  };




  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li className={`link ${isActive(navState.KAI.name)}`} onClick={() => handleNavChange(navState.KAI)}>Kai Cenat</li>
          <li className={`link ${isActive(navState.DUKE.name)}`} onClick={() => handleNavChange(navState.DUKE)}>Duke Denis</li>
          <li className={`link ${isActive(navState.SPEED.name)}`} onClick={() => handleNavChange(navState.SPEED)}>Ishowspeed</li>
        </ul>
      </nav>


      <section id="kai-cenat">
        <h2>{switchNav}</h2>
        {currentVideos.map((videoId) => (
          <iframe
            key={videoId}
            width="500"
            height="300"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`${switchNav} Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </section>
    </div>
  );
}

export default App;
