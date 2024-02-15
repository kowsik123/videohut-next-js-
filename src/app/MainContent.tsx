"use client"
import Card from '@/components/Card'
import MovieCategory from '@/components/MovieCategory'
import Poster from '@/components/Poster'
import React from 'react'

const defaultMovie = {
  name: 'Big Buck Bunny',
  id: '9099000',
  nameImageSrc: 'https://raw.githubusercontent.com/kowsik123/React-Task-1/main/task-1/public/Big_Buck_Bunny.png',
  description: 'Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.',
  tag: 'U 3+',
  trailerSrc: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Big.Buck.Bunny.-.Frank.Bunny.png'
}

const movieCategories = [
  {name: 'Top 10 Movies', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
  {name: 'Because you watched panda', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
  {name: 'US blockbusters', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
  {name: 'Comedy Hits', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
  {name: 'Famous TV Series', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
  {name: 'Romantic', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
  {name: 'Action Movies', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
  {name: 'Upcoming Movies', movies: [defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie, defaultMovie]},
]

function MainContent() {
  return (
    <div>
      <Poster movie={defaultMovie} muteOption/>
      <div>
        {movieCategories.map((movieCategory)=><MovieCategory name={movieCategory.name} movies={movieCategory.movies} />)}
      </div>
    </div>
  )
}

export default MainContent