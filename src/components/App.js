import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {data } from '../data'

class App extends React.Component{

  componentDidMount(){
    const {store}=this.props
    store.subscribe(()=>{
      console.log("updated")
      this.forceUpdate();
    })

    store.dispatch({
      type: "ADD_MOVIES",
      movies: data
    })
  }
  isMovieFavourite=(movie)=>{
    const {favourites}=this.props.store.getState();

    const index=favourites.indexOf(movie);

    if(index!==-1){
      return true;
    }

    return false;
  }

  chnage=(val)=>{
    this.props.store.dispatch({
      type: "SHOW_FAVOURITE",
      show: val
    })
  }
  

  render(){
    const {list,favourites,show}= this.props.store.getState();

    const displayMovies =show? favourites : list
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${show ? '': 'active-tabs'}`}onClick={()=>this.chnage(false)}>Movie</div>
            <div className={`tab ${show ? 'active-tabs': ''}`} onClick={()=>this.chnage(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index) =>{
              return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)} />
            })}
          </div>
        </div>
      </div>
  );
}
}

export default App;
