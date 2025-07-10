import React from 'react';
import styles from './Business.module.css';


const Business = ({ business }) => {
    console.log('Rendering Businesses: ', business);
    
    return (
        <div className={styles.business}>
            {business.imageSrc && (
                <img className={styles.image} src={business.imageSrc} alt={business.name} />
            )}
            <div className={styles.name}>{business.name}</div>
            <div className={styles.address}>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state}, {business.zipCode}</p>
            </div>

            <div className={styles.reviews}>
                <div className={styles.category}>{business.category}</div>
                <div className={styles.ratingLine}>
                    <span>{business.rating}</span>
                    <span>{business.reviewCount}</span>
                </div>
            </div>
        </div>

    );
};


export default Business;