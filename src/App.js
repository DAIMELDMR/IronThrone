import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Characters from './components/Characters';
import FilterCharacter from './components/FilterCharacter';

function App() {
  const [characters, setChar] = useState([]);
  const [name, setName] = useState('');


  useEffect(() => {
    const getChar = () => {
      axios.get(`https://thronesapi.com/api/v2/Characters?name=${name}`)
        .then(res => {
          setChar(res.data);
        })
    }
    console.log()
    getChar();

  }, [])

  return (
    <div className="container">
      <Header />
      <FilterCharacter getName={ (letter) => setName(letter) }/>
      <Characters characters = {characters} />
    </div>
  );
}

export default App;
