import React from 'react'
import styles from '../../scss/HomePage.module.scss'

function Home() {
    return (
        <div className={styles.homePage}>  
            <h1 className={styles.title}>Welcome to my watchlist</h1>
            <div className={styles.backGround}></div>
        </div>
    )
}

export default Home
