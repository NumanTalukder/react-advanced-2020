import React from 'react'

const ErrorExample = () => {
  let title = 'random title'
  const clickHandle = () => {
    title = 'Hello People'
    console.log(title)
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={clickHandle}>
        Click to Change
      </button>
    </>
  )
}

export default ErrorExample
