import React from 'react';
import {useSelector} from 'react-redux';

//ESTADO LOCAL
const InfoEnviada = () => {
   const [informacion, setInformacion] = React.useState({
      nombre:'',
      email:'',
      asunto:'',
      mensaje:'',
   }) 
//ME TRAIGO INFORMACION DEL ESTADO GLOBAL
   const {formulario} = useSelector((state)=>{
      return state
   })

// manejo la info cuando se monta, cuando cambia y cuando se desmonta el componente
   React.useEffect(()=>{
      setInformacion(formulario)
   },[formulario])


   return (
      <div>
         {/*Aquí puedes renderizar la información*/}
         <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
         <h3>{informacion.nombre}</h3>
         <h3>{informacion.email}</h3>
         <h3>{informacion.asunto}</h3>
         <h3>{informacion.mensaje}</h3>
      </div>
   );
};

export default InfoEnviada;
