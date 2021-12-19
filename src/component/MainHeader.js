import clsx from 'clsx'
import React from 'react'
import {Link, Outlet} from 'react-router-dom'

import style from '../scss/MainHeader.module.scss'

function MainHeader() {
    return (
        <header className = {clsx(style.mainHeader)}>
            <nav className = {clsx(style.navWrapper)}>
                <ul>
                    <li><Link to = '/'>myWatchlists</Link></li>
                    <li><Link to = '/movie'>Movie</Link></li>
                    <li><Link to = '/anime'>Anime</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </header>
    )
}

export default MainHeader
