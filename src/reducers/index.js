import { combineReducers } from "redux";
const initialMovieState={
    list:[],
    favourites: [],
    show: false
}

export  function movies (state=initialMovieState,action){
    if(action.type==='ADD_MOVIES'){
        return {
            ...state,
            list: action.movies
        }
    }
    if (action.type==='ADD_FAVOURITE'){
        return {
            ...state,
            favourites: [action.movie,...state.favourites]
        }
    }
    if (action.type==='REMOVE_FAVOURITE'){
        const filteredArray=state.favourites.filter(movie=>{
            return movie.title!==action.movie.title
        });
        return {
            ...state,
            favourites: filteredArray
        }
    }
    if (action.type==='SHOW_FAVOURITE'){
        
        return {
            ...state,
            show: action.show
        }
    }
    if(action.type==="ADD_MOVIES_TO_LIST"){
        return {
            ...state,
            list: [action.movie,...state.list]
        }
    }



    return state;
}

const initialSearchstate={
    result: {},
    showSearchResults: false
};

export function search(state=initialSearchstate,action){
    if(action.type==='ADD_SEARCH'){
        return {
            ...state,
            result: action.movie,
            showSearchResults: true,
        }
    }
    if(action.type==='ADD_MOVIES_TO_LIST'){
        return {
            ...state,
            showSearchResults: false
        }
    }

    return state;
}



// export  default function rootReducer(state=initialRootState,action){
//     return {
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
    movies: movies,
    search: search
})