import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Yelp from '../../utils/Yelp';


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortingOption, setSortingOption] = useState(sortByOptions['Best Match']);
    
    const handleSearchTermChange = (event) => setSearchTerm(event.target.value);
    const handleLocationChange = (event) => setLocation(event.target.value);
    const handleSortChange = (optionValue) => setSortingOption(optionValue);
    const handleSortOptionClick = (value) => () => {handleSortChange(value)};

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchTerm || !location) return;
        
        try {
            const results = await Yelp.search(searchTerm, location, sortingOption);
            onSearch(results);
        } catch (error) {
            console.error("Search failed: ", error)
        }
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
        <form onSubmit={handleSearch}>
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
            <button 
                type="submit" 
                onClick={handleSearch}
                disabled={!searchTerm || !location}
            >
                Search
            </button>
        </div>
        </form>
    );
};


export default SearchBar;