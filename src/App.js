import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharactersGrid from './components/characters/CharactersGrid';
import Axios from 'axios';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
