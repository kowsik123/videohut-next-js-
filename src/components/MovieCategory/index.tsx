import React from 'react'
import './style.css'

const MovieCategory = ({children}: React.PropsWithChildren) => {
  return (
    <div className='movie-category'>{children}</div>
  )
}

export default MovieCategory