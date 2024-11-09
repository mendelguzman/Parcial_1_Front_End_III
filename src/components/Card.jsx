import React from 'react'
import styles from '../styles/Card.module.css'

function Card({nombre, color}) {
    return (
        <div className={styles.cardContainer}>
            <p>
                <span className={styles.cardSubDescription}>Tu nombre es : {nombre}</span>
                <br />
                <span className={styles.cardSubDescription}>Sabemos que tu color favorito es: </span>
                <div className={styles.colorBox} style={{ backgroundColor: color }}>
                    <p>{color}</p>
                </div>
            </p>
        </div>
    );
};

export default Card