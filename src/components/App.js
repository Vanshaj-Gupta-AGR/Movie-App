import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {data } from '../data'
import { search } from '../reducers';
import { connect } from 'react-redux';
import {StoreContext} from '../index'


class App extends React.Component{

  componentDidMount(){
  
  

    this.props.dispatch({
      type: "ADD_MOVIES",
      movies: data
    })
  }
  isMovieFavourite=(movie)=>{
    const {movies}=this.props;
    const {favourites}=movies

    const index=favourites.indexOf(movie);

    if(index!==-1){
      return true;
    }

    return false;
  }

  chnage=(val)=>{
    this.props.dispatch({
      type: "SHOW_FAVOURITE",
      show: val
    })
  }
  

  render(){
    const {movies,search}=this.props
    const {list,favourites,show}= movies;

    const displayMovies =show? favourites : list
    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${show ? '': 'active-tabs'}`}onClick={()=>this.chnage(false)}>Movie</div>
            <div className={`tab ${show ? 'active-tabs': ''}`} onClick={()=>this.chnage(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index) =>{
              return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.dispatch} isFavourite={this.isMovieFavourite(movie)} />
            })}
          </div>
        </div>
      </div>
  );
}
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=><App store={store} />
//           }
//       </StoreContext.Consumer>
//     )
//   }
// }

function callback(state){
    return {
      movies: state.movies,
      search: state.search
    }
}

const connectedAppComponent=connect(callback)(App)

export default connectedAppComponent;
