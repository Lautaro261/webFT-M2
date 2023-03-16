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

    const property = event.target.name; /* este name es el valor del abributo del elemento input que se esta modificando */
    const value = event.target.value; /*  */

    setInputs({
      ...inputs,
      [property] : value,
       /* property = name o email o message ES VARIABLE 
          name : event.target.value 
          email: event.target.value 
          message: event.target.value
      */ 
    })

    /* setErrors(validate(inputs)) pero inputs es un objeto validate({...inputs}) */
    setErrors(validate({
      ...inputs,
      [property] : value,
    }))

  }

  function handleSubmit(event){
    event.preventDefault()
    /* Cómo se conviente un obejeto a una array? */
    if(!Object.keys(errors).length){
      alert('Datos completos');
      setInputs({
        name:"",
        email:"",
        message:"",
      })
      setErrors({
        name:"",
        email:"",
        message:"",
      })
    }else{
      alert('Debe llenar todos los campos');
    }
  }











  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nombre:</label>
        <input className={errors.name && 'warning'} type="text" name="name" placeholder="Escribe tu nombre..." value={inputs.name} onChange={handleChange}/>
        {errors.name && <p className='danger'>{errors.name}</p>}
      </div> 

      <div>
        <label htmlFor='email'>Correo Electrónico:</label>
        <input className={errors.email && 'warning'} type="text" name="email" placeholder="Escribe tu email..." value={inputs.email} onChange={handleChange}/>
        {errors.email && <p className='danger'>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor='message'>Mensaje:</label> {/* IMPORTANTE: EL htmlFor de label tiene que ser igual al name */}
        <textarea className={errors.message && 'warning'} type="text" cols='30' rows='10' name="message" placeholder='Escribe tu mensaje...' value={inputs.message} onChange={handleChange}></textarea>
        {errors.message && <p className='danger'>{errors.email}</p>}
      </div>

      <div>
        <button type='submit' >Enviar</button>
      </div>

    </form>
  )
}

export function validate(inputs){
  const errors={}
  if(!inputs.name) errors.name = 'Se requiere un nombre'

  if(!regexEmail.test(inputs.email)) errors.email= 'Debe ser un correo electrónico';

  if(!inputs.message) errors.message= 'Se requiere un mensaje'

  return errors;
}