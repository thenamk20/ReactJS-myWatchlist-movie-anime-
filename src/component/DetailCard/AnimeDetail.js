import React from 'react'
import { useContext } from 'react'
import styles from '../../scss/ItemDetail.module.scss'
import { DetailContext, actionsDetail } from '../DetailContext'

function AnimeDetail({ anime }) {

    const [, dispatch] = useContext(DetailContext)

    return (
        <div className={styles.itemDetail}>
            <div className={styles.container}>

                <div className={styles.posterWrapper}>
                    {
                        anime.image_url ? (
                            <img
                                src={anime.image_url}
                                alt={`${anime.title} Poster`}
                            />) : (<div className={styles.fillerPoster} />)
                    }
                </div>

                <div className={styles.info}>
                    <h3 className={styles.title}>{anime.title}</h3>
                    <h4 className={styles.date}><span>Start date: </span>{anime.start_date.substring(0,7)}</h4>
                    <h4 className={styles.date}><span>End date: </span>{anime.end_date.substring(0,7)}</h4>
                    <h4 className={styles.episodes}><span>Episodes: </span>{anime.episodes}</h4>
                    <h4 className={styles.episodes}><span>Link:</span><a href = {anime.url}  target="_blank" rel="noreferrer"> link</a></h4>
                    <h4 className={styles.vote}><span>Vote average: </span>{anime.score}</h4>
                    <h4 className={styles.voteCount}><span>Members: </span>{anime.members}</h4>
                    <span>Overview: </span>
                    <p clasName={styles.overview}>{anime.synopsis}</p>

                    <div className={styles.exitBtn}>
                        <button
                            
                            onClick={() => dispatch(actionsDetail.removeAnimeDetail())}
                        >
                            Go back
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AnimeDetail
