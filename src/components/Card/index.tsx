import React from 'react'
import './style.css'

type CardPropType = React.PropsWithChildren & {
    type: 'compact' | 'expanded';
}

const Card = ({children, type}: CardPropType) => {
  return (
    <>
        { type==='compact' && <div className='card'>{children}</div>}
    </>
  )
}

export default Card