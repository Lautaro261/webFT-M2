import React  from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {

  const [inputs, setInputs]= React.useState({
    name:"",
    email:"",
    message:"",
  })

  const [errors, setErrors] = React.useState({
    name:"",
    email:"",
    message:"",
  })

  function handleChange(event){

    const property = event.target.name;
    const value = event.target.value
  }











  return (
    <form>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" placeholder="Escribe tu nombre..." value={inputs.name}/>
      </div> 

      <div>
        <label>Correo electronico</label>
        <input type="text" name="email" placeholder="Escribe tu correo..." value={inputs.email}/>
      </div>

      <div>
        <label>Mensaje:</label>
        <input type="text" name="menssage" placeholder='Escribe tu mensaje...' value={inputs.message}/>
      </div>

      <div>
        <button type='submit' >Enviar</button>
      </div>

    </form>
  )
}
