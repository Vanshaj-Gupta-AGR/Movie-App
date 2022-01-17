const initialMovieState={
    list:[],
    favourites: [],
    show: false
}

export default function movies (state=initialMovieState,action){
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



    return state;
}