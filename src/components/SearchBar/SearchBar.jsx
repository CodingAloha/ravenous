import React, { useState } from 'react';
import styles from './SearchBar.module.css';


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortingOption, setSortingOption] = useState(sortByOptions['Best Match']);
    
    const handleSearchTermChange = (event) => setSearchTerm(event.target.value);
    const handleLocationChange = (event) => setLocation(event.target.value);
    const handleSortChange = (optionValue) => setSortingOption(optionValue);
    const handleSortOptionClick = (value) => () => {handleSortChange(value)};

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortingOption}.`)
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(option => {
            const value = sortByOptions[option];
            return (
                <li 
                    key={value}
                    className={sortingOption === value ? styles.active : ''}
                    onClick={handleSortOptionClick(value)}
                >
                    {option}
                </li>
            );
        });
    };

    return (
        <div className={styles.searchBar}>
            <ul className={styles.sortOptions}>
                {renderSortByOptions()}
            </ul>
            <div className={styles.inputs}>
                <input 
                    type="text" 
                    placeholder="Search Businesses"
                    value={searchTerm}
                    onChange={handleSearchTermChange} 
                />
                <input 
                    type="text" 
                    placeholder="Where?"
                    value={location}
                    onChange={handleLocationChange}     
                />
            </div>
            <button type="submit" onClick={handleSearch}>Search</button>
        </div>
    );
};


export default SearchBar;