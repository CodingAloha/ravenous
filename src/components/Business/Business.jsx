import React from 'react';
import styles from './Business.module.css';


const Business = ({ business }) => {
    
    return (
        <div className={styles.business}>
            <div>
                <img className={styles.img} src={business.imageSrc} alt={business.name} />
            </div>
            <div className={styles.name}>
                <h2>{business.name}</h2>
            </div>
            <div className={styles.address}>
                <p>{business.address}</p>
                <p>{business.city}, {business.state}, {business.zipCode}</p>
            </div>
            <div className={styles.reviews}>
                <p>{business.category}</p>
                <p>{business.rating} stars</p>
                <p>{business.reviewCount} reviews</p>
            </div>
        </div>

    );
};


export default Business;