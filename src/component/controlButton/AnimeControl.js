import React from 'react'
import { useContext } from 'react'
import  {GlobalContext, actions}  from '../ItemContext'
import styles from '../../scss/ItemCard.module.scss'


function AnimeControl({ anime, type }) {

    const [,dispatch] = useContext(GlobalContext)

    return (
        <div className={styles.itemControl} >
            {type === 'watchlist' && (
                <>
                    <button
                        className={styles.ctrBtn}
                        onClick = {() => dispatch(actions.moveAnimeToWatched(anime))}
                    >
                        <i className="fas fa-eye"></i>
                    </button>

                    <button
                        className={styles.ctrBtn}
                        onClick = {() => dispatch(actions.removeAnimeFromWatchlist(anime.mal_id))}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </>
            )}

            {type === 'watched' && (
                <>
                    <button
                        className={styles.ctrBtn}
                        onClick={() => dispatch(actions.moveAnimeToWatchlist(anime))}
                    >
                        <i className="fas fa-eye-slash"></i>
                    </button>

                    <button
                        className={styles.ctrBtn}
                        onClick={() => dispatch(actions.removeAnimeFromWatched(anime.mal_id))}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default AnimeControl
