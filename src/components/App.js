import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {data } from '../data'
import { search } from '../reducers';

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
    const {movies}=this.props.store.getState()
    const {favourites}=movies

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
    const {movies,search}=this.props.store.getState()
    const {list,favourites,show}= movies;

    const displayMovies =show? favourites : list
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
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
