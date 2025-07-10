import React, { useState, useEffect } from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import Yelp from './utils/Yelp';


function App() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchDefaultBusinesses = async () => {
      try {
        const results = await Yelp.search('pizza', 'los angeles', 'best_match');
        setBusinesses(results);
      } catch (error) {
        console.error("Initial fetch failed: ", error);
      }
    };
    
    fetchDefaultBusinesses();
  }, []);

  return (
    <div className="App">
      <SearchBar onSearch={setBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}


export default App;
