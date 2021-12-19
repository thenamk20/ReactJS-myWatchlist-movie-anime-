
import {
    ADD_MOVIE_TO_WATCHLIST, ADD_MOVIE_TO_WATCHED,
    MOVE_MOVIE_TO_WATCHED, REMOVE_MOVIE_FROM_WATCHLIST,
    MOVE_MOVIE_TO_WATCHLIST, REMOVE_MOVIE_FROM_WATCHED,
    ADD_ANIME_TO_WATCHLIST,
    ADD_ANIME_TO_WATCHED,
    MOVE_ANIME_TO_WATCHED,
    REMOVE_ANIME_FROM_WATCHLIST,
    MOVE_ANIME_TO_WATCHLIST,
    REMOVE_ANIME_FROM_WATCHED

} from './constants'

// init state for useReducer
const initialState = {
    mvWatchlist: localStorage.getItem('mvWatchlist') ?
        JSON.parse(localStorage.getItem('mvWatchlist')) : [],
    mvWatched: localStorage.getItem('mvWatched') ?
        JSON.parse(localStorage.getItem('mvWatched')) : [],

    aniWatchlist: localStorage.getItem('aniWatchlist') ?
        JSON.parse(localStorage.getItem('aniWatchlist')) : [],
    aniWatched: localStorage.getItem('aniWatched') ?
        JSON.parse(localStorage.getItem('aniWatched')) : []
}

function AppReducer(state, action) {
    switch (action.type) {
        //movie
        case ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                mvWatchlist: [...state.mvWatchlist, action.payload]
            }

        case ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                mvWatched: [...state.mvWatched, action.payload],
                mvWatchlist: state.mvWatchlist.filter((movie) => movie.id !== action.payload.id)
            }

        case MOVE_MOVIE_TO_WATCHED:
            return {
                ...state,
                mvWatched: [...state.mvWatched, action.payload],
                mvWatchlist: state.mvWatchlist.filter((movie) => movie.id !== action.payload.id)

            }

        case REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                mvWatchlist: state.mvWatchlist.filter((movie) => movie.id !== action.payload)
            }


        case MOVE_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                mvWatchlist: [...state.mvWatchlist, action.payload],
                mvWatched: state.mvWatched.filter((movie) => movie.id !== action.payload.id)
            }

        case REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                mvWatched: state.mvWatched.filter((movie) => movie.id !== action.payload)
            }

        //anime
        case ADD_ANIME_TO_WATCHLIST:
            return {
                ...state,
                aniWatchlist: [...state.aniWatchlist, action.payload]
            }
            
        case ADD_ANIME_TO_WATCHED:
            return {
                ...state,
                aniWatched: [...state.aniWatched, action.payload],
                aniWatchlist: state.aniWatchlist.filter((anime) => anime.mal_id !== action.payload.mal_id)
            }
        
        case MOVE_ANIME_TO_WATCHED:
            return {
                ...state,
                aniWatched: [...state.aniWatched, action.payload],
                aniWatchlist: state.aniWatchlist.filter((anime) => anime.mal_id !== action.payload.mal_id)
            }
        
        case REMOVE_ANIME_FROM_WATCHLIST:
            return {
                ...state,
                aniWatchlist: state.aniWatchlist.filter((anime) => anime.mal_id !== action.payload)
            }
        
        case MOVE_ANIME_TO_WATCHLIST:
            return {
                ...state,
                aniWatchlist: [...state.aniWatchlist, action.payload],
                aniWatched: state.aniWatched.filter((anime) => anime.mal_id !== action.payload.mal_id)

            }
        
        case REMOVE_ANIME_FROM_WATCHED:
            return {
                ...state,
                aniWatched: state.aniWatched.filter((anime) => anime.mal_id !== action.payload)
            }

        default:
            return state
    }
}

export { initialState }
export default AppReducer
