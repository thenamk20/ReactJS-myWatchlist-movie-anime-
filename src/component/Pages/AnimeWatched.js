
import React from 'react'
import clsx from 'clsx'
import styles from '../../scss/ItemWatchPage.module.scss'
import SubHeader from '../SubHeader'
import {useContext} from 'react'
import { GlobalContext } from '../ItemContext'
import AnimeCard from '../AnimeCard'

function MovieWatched() {

    const [state,] = useContext(GlobalContext)

    return (
            <div className={styles.watchPage}>
                <SubHeader type ='anime' anime></SubHeader>

                {state.aniWatched.length > 0 ? (
                    <div className= {styles.container}>
                        <span className = {clsx(styles.count, styles.anime)}>{state.aniWatched.length}</span>
                        {state.aniWatched.map((anime)=> (
                            <AnimeCard anime = {anime} type ='watched'></AnimeCard>
                        ))}
                    </div>
                ) : (
                    <h4>Your watched list is empty now!</h4>
                )}

            </div>
    
        
    )
}

export default MovieWatched
