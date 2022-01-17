// {
//     type: "ADD_MOVIES",
//     movies: [m1,m2,m3]
// }

export  function handleMovieSearch(movies){
    
    console.log("gbg")

    return function (dispatch){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movies}`
    console.log("gbg")
    fetch(url)
      .then((response)=>response.json())
      .then((movie)=>{
        console.log(movie);

        dispatch({type: "ADD_SEARCH",movie})
      })
    
    }
 

}