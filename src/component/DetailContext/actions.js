import { SHOW_MOVIE_DETAIL, REMOVE_MOVIE_DETAIL ,
            SHOW_ANIME_DETAIL, REMOVE_ANIME_DETAIL
} from "./constants";

export const showMovieDetail = (payload) => ({
    type: SHOW_MOVIE_DETAIL,
    payload
})

export const removeMovieDetail = () => ({
    type: REMOVE_MOVIE_DETAIL
})

export const showAnimeDetail = (payload) => ({
    type: SHOW_ANIME_DETAIL,
    payload
})

export const removeAnimeDetail = () => ({
    type: REMOVE_ANIME_DETAIL
})