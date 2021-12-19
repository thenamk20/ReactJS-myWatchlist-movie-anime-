import { useContext } from 'react'
import { actions, GlobalContext } from './ItemContext'
import { actionsDetail,  DetailContext} from './DetailContext'
import styles from '../scss/ResultCard.module.scss'

function ResultCard({ film, type }) {

    const [state, dispatch] = useContext(GlobalContext)
    
    const [ ,dtDispatch] = useContext(DetailContext)
    
    if (type === 'movie') {

        let isWatchlistDisable = state.mvWatchlist.some((item) => item.id === film.id) ||
            state.mvWatched.some((item) => item.id === film.id)

        let isWatchedDisable = state.mvWatched.some((item) => item.id === film.id)

        return (

            <div className={styles.resultCard}>
                <div className={styles.posterWrapper}>
                    {
                        film.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                                alt={`${film.title} Poster`}
                            />) : (<div className={styles.fillerPoster} />)
                    }

                </div>
                <div className={styles.filmInfo}>
                    <h3 className={styles.title}>{film.title}</h3>
                    <h4 className={styles.date}>
                        {film.release_date ? film.release_date.substring(0, 4) : '---'}

                    </h4>
                    <button
                        className= {styles.detailBtn}
                        onClick = {() => dtDispatch(actionsDetail.showMovieDetail(film))}
                    >
                        Detail
                    </button>
                </div>

                <div className={styles.controlGroup}>
                    <button
                        className={styles.controlBtn}
                        onClick={() => dispatch(actions.addMovieToWatchlist(film))}
                        disabled={isWatchlistDisable}
                    >Add to watchlist
                    </button>
                    <button
                        className={styles.controlBtn}
                        onClick={() => dispatch(actions.addMovieToWatched(film))}
                        disabled={isWatchedDisable}
                    >
                        Add to watched
                    </button>
                </div>
            </div>

        )
    }

    else if (type === 'anime') {

        let isWatchlistDisable = state.aniWatchlist.some((item) => item.mal_id === film.mal_id) ||
            state.aniWatched.some((item) => item.mal_id === film.mal_id)

        let isWatchedDisable = state.aniWatched.some((item) => item.mal_id === film.mal_id)

        return (
            <div className={styles.resultCard}>
                <div className={styles.posterWrapper}>
                    {
                        film.image_url ? (
                            <img
                                src={film.image_url}
                                alt={`${film.title} Poster`}
                            />) : (<div className={styles.fillerPoster} />)
                    }

                </div>
                <div className={styles.filmInfo}>
                    <h3 className={styles.title}>{film.title}</h3>
                    {film.start_date !== film.end_date ? (
                        <h4 className={styles.date}>
                            {film.start_date ? film.start_date.substring(0, 7) : '---'} {`_ `}
                            {film.end_date ? film.end_date.substring(0, 7) : '---'}
                        </h4>
                    ) : (
                        <h4 className={styles.date}>
                            {film.start_date ? film.start_date.substring(0, 7) : '---'}
                        </h4>
                    )}
                    <button
                        className= {styles.detailBtn}
                        onClick = {() => dtDispatch(actionsDetail.showAnimeDetail(film))}
                    >
                        Detail
                    </button>
                </div>
                <div className={styles.controlGroup}>
                    <button
                        className={styles.controlBtn}
                        onClick={() => dispatch(actions.addAnimeToWatchlist(film))}
                        disabled={isWatchlistDisable}
                    >Add to watchlist
                    </button>
                    <button
                        className={styles.controlBtn}
                        onClick={() => dispatch(actions.addAnimeToWatched(film))}
                        disabled={isWatchedDisable}
                    >
                        Add to watched
                    </button>
                </div>
            </div >
        )
    }

}

export default ResultCard
