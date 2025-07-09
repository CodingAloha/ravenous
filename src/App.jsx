import React from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';


const sampleBusinesses = [{
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}];


// function App() {
//   return (
//     <div className="App">
//       <SearchBar />
//       <BusinessList business={sampleBusiness} />
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={sampleBusinesses} />
    </div>
  );
}

export default App;
