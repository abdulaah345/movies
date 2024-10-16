import Watched from "../Watched";
import * as actions from "./ActionType"

export const reducer=(state,action)=>{
    switch(action.type) {
        case actions.ADD_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                    watchlist:[action.payload,...state.watchlist]
            };
            case actions.REMOVE_MOVIE_FROM_WATCHLIST:
                return {
                    ...state,
                        watchlist:state.watchlist.filter((moive)=> moive.imdbId!==action.payload)
                };
                case actions.MOVE_TO_WATCHLIST:
                    return {
                        ...state,
                            watched:state.watched.filter((moive)=> moive.imdbId!==action.payload.imdbId),
                            watchlist:[action.payload,...state]
                    };
                    case actions.ADD_MOVIE_TO_WATCHED:
                        return {
                            ...state,
                            watched:state.watched.filter((moive)=> moive.imdbId!==action.payload.imdbId),
                                watched:[action.payload,...state.watched]
                        };
                        case actions.REMOVE_FROM_WATCHED:
                            return {
                                ...state,
                                    watched:state.watched.filter((moive)=> moive.imdbId!==action.payload)
                            };
    
default : return state
    }
}