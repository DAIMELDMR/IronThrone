import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Characters from './components/Characters';
import FilterCharacter from './components/FilterCharacter';

function App() {
  const [characters, setChar] = useState([]);


  useEffect(() => {
    const getChar = () => {
      axios.get(`https://thronesapi.com/api/v2/Characters`)
        .then(res => {
          setChar(res.data);
        })
    }
    getChar();

  }, [])

  return (
    <div className="container">
      <Header />
      <FilterCharacter/>
      <Characters characters = {characters} />
    </div>
  );
}

export default App;
