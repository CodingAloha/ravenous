import React from 'react';
import styles from './SearchBar.module.css';


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(option => {
            const value = sortByOptions[option];
            return <li key={value}>{option}</li>;
        });
    };

    return (
        <div className={styles.searchBar}>
            <ul className={styles.sortOptions}>
                {renderSortByOptions()}
            </ul>
            <div className={styles.inputs}>
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            <button type="submit" >Search</button>
        </div>
    );
};


export default SearchBar;