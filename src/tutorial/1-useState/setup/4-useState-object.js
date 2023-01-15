import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Numan',
    age: 25,
    skill: 'Fron-end Developer',
  })

  const update = () => {
    setPerson({ ...person, skill: 'Full Stack Developer' })
  }

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.skill}</h2>
      <button className='btn' onClick={update}>
        Update
      </button>
    </>
  )
}

export default UseStateObject
