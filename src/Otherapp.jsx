import React, {useState} from 'react'

const App = () => {

  let [name, setName] = useState("William")
  let [lastName, setLastName] = useState("Kaseu")

  let [tempName, setTempName] = useState("")
  let [tempLastName, setTempLastName] = useState("")


  function handleName(event){

    setTempName(event.target.value)
  }

  function handleOnSubmit(event){

    event.preventDefault()
    setName(tempName)
    setLastName(tempLastName)

    setTempName(' ')
    setTempLastName(' ')
    
  }


  return (
    <>
      <h1>Hello, {name} {lastName}</h1>

      <form onSubmit= {handleOnSubmit}>
        <input 
          type='text'
          value = {tempName}
          onChange= {handleName}
        />

        <input 
                type='text'
                value = {tempLastName}
                onChange= {event => setTempLastName(event.target.value)}
              />

        <button>Submit</button>
      </form>

    
    </>
  )
}

export default App