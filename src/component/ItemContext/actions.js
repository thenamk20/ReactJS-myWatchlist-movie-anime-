import {
    ADD_MOVIE_TO_WATCHED, ADD_MOVIE_TO_WATCHLIST,
    MOVE_MOVIE_TO_WATCHED, REMOVE_MOVIE_FROM_WATCHLIST,
    MOVE_MOVIE_TO_WATCHLIST, REMOVE_MOVIE_FROM_WATCHED,

    ADD_ANIME_TO_WATCHLIST,
    ADD_ANIME_TO_WATCHED,
    MOVE_ANIME_TO_WATCHED,
    REMOVE_ANIME_FROM_WATCHLIST,
    MOVE_ANIME_TO_WATCHLIST,
    REMOVE_ANIME_FROM_WATCHED

} from "./constants";

// movie
export const addMovieToWatchlist = (payload) => ({
    type: ADD_MOVIE_TO_WATCHLIST,
    payload
})

export const addMovieToWatched = (payload) => ({
    type: ADD_MOVIE_TO_WATCHED,
    payload
})

export const moveToWatched = (payload) => ({
    type: MOVE_MOVIE_TO_WATCHED,
    payload
})

export const removeFromWatchlist = (payload) => ({
    type: REMOVE_MOVIE_FROM_WATCHLIST,
    payload
})

export const moveMovieToWatchlist = (payload) => ({
    type: MOVE_MOVIE_TO_WATCHLIST,
    payload
})

export const removeMovieFromWatched = (payload) => ({
    type: REMOVE_MOVIE_FROM_WATCHED,
    payload
})

//anime
export const addAnimeToWatchlist = (payload) => ({
    type: ADD_ANIME_TO_WATCHLIST,
    payload
})

export const addAnimeToWatched = (payload) => ({
    type: ADD_ANIME_TO_WATCHED, 
    payload
})

export const moveAnimeToWatched = (payload) => ({
    type: MOVE_ANIME_TO_WATCHED,
    payload
})

export const removeAnimeFromWatchlist = (payload) => ({
    type: REMOVE_ANIME_FROM_WATCHLIST,
    payload
})

export const moveAnimeToWatchlist = (payload) => ({
    type: MOVE_ANIME_TO_WATCHLIST,
    payload
})


export const removeAnimeFromWatched = (payload) => ({
    type: REMOVE_ANIME_FROM_WATCHED,
    payload
})
