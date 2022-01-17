import React from "react";



class MovieCard extends React.Component {

handleFavouriteClick=()=>{
    const {movie}=this.props;
    
    this.props.dispatch({
        type: "ADD_FAVOURITE",
        movie: movie
    })
}
handleUnFavouriteClick=()=>{
    const {movie}=this.props;
    
    this.props.dispatch({
        type: "REMOVE_FAVOURITE",
        movie: movie
    })
}
   

    render(){
        const { movie }=this.props;
  
  return (
    <div className="movie-card">
        <div className="left">
            <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">

        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
            <div className="rating">
                {this.props.movie.imdbRating}
            </div>

            {this.props.isFavourite ?  <button onClick={this.handleUnFavouriteClick} className="unfavourite-btn">
                UnFavourite
            </button> : <button onClick={this.handleFavouriteClick} className="favourite-btn">
                Favourite
            </button>}
            
        </div>
        

        </div>

        
         
        </div>
     
    
  );
}
}

export default MovieCard;
