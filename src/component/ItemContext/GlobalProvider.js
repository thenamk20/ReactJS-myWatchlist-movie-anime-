
import React, { useEffect } from 'react'
import { useReducer } from 'react'
import GlobalContext from './GlobalContext'
import AppReducer, {initialState} from './AppReducer'

function GlobalProvider({children}) {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(()=> {
        localStorage.setItem('mvWatchlist', JSON.stringify(state.mvWatchlist))
        localStorage.setItem('mvWatched', JSON.stringify(state.mvWatched))
    }, [state.mvWatched, state.mvWatchlist])

    useEffect(() => {
        localStorage.setItem('aniWatchlist',JSON.stringify(state.aniWatchlist))
        localStorage.setItem('aniWatched',JSON.stringify(state.aniWatched))
    },[state.aniWatchlist, state.aniWatched])

    
    return (
        <GlobalContext.Provider value = {[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider
