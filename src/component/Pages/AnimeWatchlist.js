import React from 'react'
import clsx from 'clsx'
import {useContext} from 'react'
import SubHeader from '../SubHeader'
import styles from '../../scss/ItemWatchPage.module.scss'
import { GlobalContext } from '../ItemContext'
import AnimeCard from '../AnimeCard'

function AnimeWatchlist() {

    const [state, ] = useContext(GlobalContext)

    return (
        <div className = {styles.watchPage}>
            <SubHeader type='anime' anime></SubHeader>
            {
                state.aniWatchlist.length > 0 ? (
                    <div className= {styles.container} >
                        <span className = {clsx(styles.count, styles.anime)}>{state.aniWatchlist.length}</span>
                        {state.aniWatchlist.map((anime) => (
                            <AnimeCard anime = {anime} type ='watchlist'></AnimeCard>
                        ))}
                    </div>
                ) : (
                    <h4>Your watchlist is empty now, add some</h4>
                )
            }

        </div>
    )
}

export default AnimeWatchlist
