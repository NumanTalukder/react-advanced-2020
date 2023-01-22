import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ name: '', age: '', email: '' })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.name && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ name: '', age: '', email: '' })
    }
  }
  return (
    <>
      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor='name'>Name : </label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onSubmit={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, name, email, age } = person
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
