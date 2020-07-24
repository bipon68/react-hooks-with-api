import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharactersGrid from './components/characters/CharactersGrid';
import Axios from 'axios';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
