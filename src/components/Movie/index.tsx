import React from 'react'
import Card from '../Card';

export type MovieType = {
    name: string,
    id: string,
    description: string,
    tag: string,
    nameImageSrc: string,
    imageSrc: string,
    trailerSrc?: string,
};

const Movie = ({movie}: {movie: MovieType|any}) => {
  return (
    <Card type='compact'>
        <pre>{JSON.stringify(movie)}</pre>
    </Card>
  )
}

export default Movie