import React from 'react'
import { useContext } from 'react'
import  {GlobalContext, actions}  from '../ItemContext'
import styles from '../../scss/ItemCard.module.scss'


function MovieControl({ movie, type }) {

    const [, dispatch] = useContext(GlobalContext)

    return (
        <div className={styles.itemControl} >
            {type === 'watchlist' && (
                <>
                    <button
                        className={styles.ctrBtn}
                        onClick = {() => dispatch(actions.moveToWatched(movie))}
                    >
                        <i className="fas fa-eye"></i>
                    </button>

                    <button
                        className={styles.ctrBtn}
                        onClick = {() => dispatch(actions.removeFromWatchlist(movie.id))}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button
                        className={styles.ctrBtn}
                        onClick = {() => dispatch(actions.moveMovieToWatchlist(movie))}
                    >
                        <i className="fas fa-eye-slash"></i>
                    </button>

                    <button
                        className={styles.ctrBtn}
                        onClick = {() => dispatch(actions.removeMovieFromWatched(movie.id))}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControl
