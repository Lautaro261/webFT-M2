import React  from "react";
import { useDispatch} from 'react-redux';
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {

  // crear un estado local 
  const [form, setForm]= React.useState({
    nombre:'',
    email:'',
    asunto:'',
    mensaje:'',
  })


  // funcion que escucha el evento del cambio event.target.value y name y por ultimo seteo el estado local 
  // en la propiedad variable con el valor que tomo del input 
const handleInput =(event)=>{
  const value = event.target.value;
  const property = event.target.name;
  setForm({
    ...form,
    [property]:value,
  })
}

// instancio Dispatch con metodos que me permite despechar actions 
const dispatch = useDispatch()


const handleSubmit=(evento)=>{
  evento.preventDefault()
  dispatch(enviarForm(form));
  setForm({
    nombre:'',
    email:'',
    asunto:'',
    mensaje:'',
  })
}





  return (
    <div>
      <form className="contactBg" >
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre"  value={form.nombre} onChange={handleInput}/>
        <label htmlFor="email">Email: </label>
        <input name="email" value={form.email} onChange={handleInput}/>
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" value={form.asunto} onChange={handleInput}/>
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" value={form.mensaje} onChange={handleInput}/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
