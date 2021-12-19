import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from '../scss/SubHeader.module.scss'
import clsx from 'clsx'

function SubHeader({ type , movie, anime}) {
    
    return (
        <header className={clsx(style.subHeader, {
            [style.movie]: movie,
            [style.anime]: anime
        })}>
            <nav>
                <Link to={`/${type}`}>Watchlist</Link>
                <Link to={`/${type}/watched`}>Watched</Link>
                <Link to={`/${type}/add`}>Add</Link>
            </nav>
            <Outlet></Outlet>

        </header>
    )


}

export default SubHeader
