
import{Children, createcontext, useContext, useReducer} from 'react'
import { reducer } from './reducer'

const initalstate={
    watchlist:[],
    watched:[],
}
export const Glopalcontext=createcontext(initalstate)

const ContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initalstate)
 return <Glopalcontext.Prvider value={{watchlist:state.watchlist,watched:state.watched,MoviesDispatch:dispatch}}>{children}</Glopalcontext.Prvider>
}
export default ContextProvider;


export const useMoviescontext=()=>{
    return useContext(Glopalcontext);
} 