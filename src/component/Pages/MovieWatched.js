
import React from 'react'
import clsx from 'clsx'
import styles from '../../scss/ItemWatchPage.module.scss'
import SubHeader from '../SubHeader'
import {useContext} from 'react'
import { GlobalContext } from '../ItemContext'
import MovieCard from '../MovieCard'

function MovieWatched() {

    const [state,] = useContext(GlobalContext)

    return (
            <div className={styles.watchPage}>
                <SubHeader type ='movie' movie></SubHeader>

                {state.mvWatched.length > 0 ? (
                    <div className= {styles.container}>
                        <span className = {clsx(styles.count, styles.movie)}>{state.mvWatched.length}</span>
                        {state.mvWatched.map((movie)=> (
                            <MovieCard movie = {movie} type ='watched'></MovieCard>
                        ))}
                    </div>
                ) : (
                    <h4>Your watched list is empty now!</h4>
                )}

            </div>
    
        
    )
}

export default MovieWatched
