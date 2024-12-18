import React from 'react';

const ListMovie = ({movie, removeMovie}) => {//구조분해할당

  return (
    <div className="moviesMovie">
      < div className='movie-titleandyear'>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
      </ div>
      <div className="removeBtn"><button onClick={()=>removeMovie(movie.id)}>삭제</button></div>
    </div>
  );
};

export default ListMovie;