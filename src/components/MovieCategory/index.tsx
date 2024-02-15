import React from 'react'
import './style.css'
import Movie, { MovieType } from '../Movie';

type MovieCategoryType = {
  name: string,
  movies: MovieType[],
} & React.PropsWithChildren;

const MovieCategory = ({name, movies}: MovieCategoryType) => {
  return (
    <>
      <div className='movie-category-name'>{name}</div>
      <div className='movie-category'>
        {movies.map((movie)=><Movie movie={movie} key={movie.id} />)}
      </div>
    </>
  )
}

export default MovieCategory