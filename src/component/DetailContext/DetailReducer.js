import { REMOVE_ANIME_DETAIL, SHOW_ANIME_DETAIL } from '.'
import {SHOW_MOVIE_DETAIL, REMOVE_MOVIE_DETAIL} from './constants'

export const initialState = {
    mvDetail: false,
    movie: undefined,
    aniDetail: false,
    anime: undefined
}

function DetailReducer(state, action) {
    switch(action.type){

        case SHOW_MOVIE_DETAIL:
            return {
                ...state,
                movie : action.payload,
                mvDetail: true
            }

        case REMOVE_MOVIE_DETAIL: 
            return {
                ...state,
                movie: undefined,
                mvDetail:false
            }
        
        case SHOW_ANIME_DETAIL:
            return {
                ...state,
                anime: action.payload,
                aniDetail: true
            }
        
        case REMOVE_ANIME_DETAIL:
            return {
                ...state,
                anime: undefined,
                aniDetail: false
            }

        default:    
            return state
    }
}

export default DetailReducer
