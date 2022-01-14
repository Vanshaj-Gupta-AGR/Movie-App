import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';

class App extends React.Component{

  render(){
  const movies= this.props.store.getState();
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movie</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {movies.map((movie,index) =>{
            return <MovieCard movie={movie} key={`movies-${index}`} />
          })}
        </div>
      </div>
    </div>
  );
}
}

export default App;
