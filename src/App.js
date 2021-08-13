import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([])
  const [currentCharId, setCurrentCharId] = useState(null)

  const openDetails = id => {
    setCurrentCharId(id)
  }

  const closeDetails = () => {
    setCurrentCharId(null)
  }


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setChar(res.data)
        
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {
          char.map((charObj, index) => {
            return <Character 
                      key={index}
                      char={charObj}
                      openDetails={openDetails}
                      closeDetails={closeDetails}
                  />
          })
        }
        {
            currentCharId && <Details charId={currentCharId} close={closeDetails} />
        }
    </div>
  );
}

export default App;
