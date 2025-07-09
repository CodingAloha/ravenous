import React from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';


const sampleBusinesses = [
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Taco Tower',
    address: '456 Taco Blvd',
    city: 'Spicetown',
    state: 'CA',
    zipCode: '90210',
    category: 'Mexican',
    rating: 4.8,
    reviewCount: 120
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Sushi Central',
    address: '789 Ocean Ave',
    city: 'Seaville',
    state: 'WA',
    zipCode: '98052',
    category: 'Japanese',
    rating: 4.6,
    reviewCount: 150  
  }
];


function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={sampleBusinesses} />
    </div>
  );
}


export default App;
