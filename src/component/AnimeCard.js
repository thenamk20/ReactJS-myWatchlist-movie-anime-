import React from 'react'
import styles from '../scss/ItemCard.module.scss'
import AnimeControl from './controlButton/AnimeControl'

function AnimeCard({anime, type}) {
    return (
        <div className= {styles.itemCard} title= {anime.title} >
            <div className={styles.overLay}></div>
            <div className={styles.posterWrapper}>
                {anime.image_url ? (
                    <img src = {anime.image_url} 
                        alt = {`${anime.title} Poster`}
                    />) : (
                        <div className = {styles.fillerPoster} ></div>
                    )
                }
            </div>
            <AnimeControl type = {type} anime={anime}></AnimeControl>
        </div>
    )
}

export default AnimeCard
