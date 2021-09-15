import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Characters from './components/Characters';
import FilterCharacter from './components/FilterCharacter';

function App() {
  const [characters, setChar] = useState([]);
  const [charFilter, setCharFilter] = useState([])

  //Filter Character fuction
  const filterCharacter = (charName) => {
    if (charName.trim() === '') {
      return setCharFilter([])
    }
    const updatedCharacters = characters.filter(char => {
      const isName = char.firstName.toLowerCase()
      return isName.startsWith(charName.toLowerCase())
    })
      setCharFilter(updatedCharacters)
  }

  //The request to the API
  const getChar = () => {
    axios.get(`https://thronesapi.com/api/v2/Characters`)
      .then(res => {
        setChar(res.data);
      })
  }
  useEffect(() => {
    getChar()

  }, [])

  return (
    <div className="container">
      <Header />
      <FilterCharacter filterCharacter={filterCharacter}/>
      <Characters characters = {charFilter.length > 0 ? charFilter: characters} />
    </div>
  );
}

export default App;
