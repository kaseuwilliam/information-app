import React, {useState} from 'react'

const App = () => {

  let [name, setName] = useState("William")
  let [lastName, setLastName] = useState("Kaseu")

  function handleName(event){

    setName(event.target.value)
  }


  return (
    <>
      <h1>Hello, {name} {lastName}</h1>

        <input 
          type='text'
          value = {name}
          onChange= {handleName}
        />

        <input 
                type='text'
                value = {lastName}
                onChange= {event => setLastName(event.target.value)}
              />
    
    </>
  )
}

export default App