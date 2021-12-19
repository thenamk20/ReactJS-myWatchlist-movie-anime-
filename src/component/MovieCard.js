import React from 'react'
import styles from '../scss/ItemCard.module.scss'
import MovieControl from './controlButton/MovieControl'

function MovieCard({movie, type}) {
    return (
        <div className= {styles.itemCard} title = {movie.title}>
            <div className={styles.overLay}></div>
            <div className={styles.posterWrapper}>
                {movie.poster_path ? (
                    <img src = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        alt = {`${movie.title} Poster`}
                    />) : (
                        <div className = {styles.fillerPoster} ></div>
                    )
                }
            </div>
            <MovieControl type = {type} movie={movie}></MovieControl>
        </div>
    )
}

export default MovieCard
