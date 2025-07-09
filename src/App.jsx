import React, { useState } from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';


function App() {
  const [businesses, setBusinesses] = useState([]);

  return (
    <div className="App">
      <SearchBar onSearch={setBusinesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
}


export default App;
