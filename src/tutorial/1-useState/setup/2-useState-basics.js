import React, { useState } from 'react'

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title')

  const handleClick = () => {
    if (title === 'Random Title') {
      setTitle('Hello People')
    } else {
      setTitle('Random Title')
    }
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  )
}

export default UseStateBasics
