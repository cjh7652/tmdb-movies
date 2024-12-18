import React, {useState} from 'react';
import ListMovie from '../components/ListMovie';
import MovieForm from '../components/MovieForm';



const Movies = () => {
 
  const [movies, setMovies]=useState([]);

  const removeMovie= (id) =>{
    setMovies(movies.filter((movie)=>{
      return movie.id !==id
    }))
  }

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ])
  }
  
  return (
    <div className='movies'>
      <h1>Movie List</h1>
      <MovieForm addMovie ={addMovie}/>
      {
        movies.map((item, i)=>{
          return(
            <ListMovie movie={item} key={i} removeMovie={removeMovie} />
          )
        })
      }
      
      
      
    </div>
  );
};

export default Movies;