import React from 'react'
import { useContext } from 'react'
import styles from '../../scss/ItemDetail.module.scss'
import { DetailContext, actionsDetail } from '../DetailContext'

function MovieDetail({ movie }) {

    const [, dispatch] = useContext(DetailContext)

    return (
        <div className={styles.itemDetail}>
            <div className={styles.container}>

                <div className={styles.posterWrapper}>
                    {
                        movie.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={`${movie.title} Poster`}
                            />) : (<div className={styles.fillerPoster} />)
                    }
                </div>

                <div className={styles.info}>
                    <h3 className={styles.title}>{movie.title}</h3>
                    <h4 className={styles.date}><span>Release date: </span>{movie.release_date}</h4>
                    <h4 className={styles.vote}><span>Vote average: </span>{movie.vote_average}</h4>
                    <h4 className={styles.voteCount}><span>Vote count: </span>{movie.vote_count}</h4>
                    <span>Overview: </span>
                    <p clasName={styles.overview}>{movie.overview}</p>

                    <div className={styles.exitBtn}>
                        <button
                            
                            onClick={() => dispatch(actionsDetail.removeMovieDetail())}
                        >
                            Go back
                        </button>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default MovieDetail

