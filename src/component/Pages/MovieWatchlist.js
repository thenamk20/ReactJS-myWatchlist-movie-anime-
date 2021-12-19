import React from 'react'
import { useContext } from 'react'
import clsx from 'clsx'
import SubHeader from '../SubHeader'
import { GlobalContext } from '../ItemContext'
import MovieCard from '../MovieCard'
import styles from '../../scss/ItemWatchPage.module.scss'

function MovieWatchlist() {

    const [state,] = useContext(GlobalContext)

    return (
        <div className = {styles.watchPage}>
            <SubHeader type='movie' movie></SubHeader>
            {
                state.mvWatchlist.length > 0 ? (
                    <div className= {styles.container} >
                        <span className = {clsx(styles.count, styles.movie)}>{state.mvWatchlist.length}</span>
                        {state.mvWatchlist.map((movie) => (
                            <MovieCard movie = {movie} type ='watchlist'></MovieCard>
                        ))}
                    </div>
                ) : (
                    <h4>Your watchlist is empty now, add some</h4>
                )
            }

        </div>
    )
}

export default MovieWatchlist
