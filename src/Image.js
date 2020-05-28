import React from 'react'

const Image = ({url}) => {
  return (
    <img src={url.url} className='url' alt="NASA image of the day"></img>
  )
}

export default Image;