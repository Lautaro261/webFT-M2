import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName:'',
      animals:[],
      species:[],
      allAnimals:[],
   })

    const handleInputChange = (event)=>{
      console.log(event.target.value)
      setZoo({
         ...zoo,
         // PARA MODIFICAR EL OBJETO INICIAL, SE LO COPIA CON ...zoo 
         // LUEGO SE PISA LA PROPIEDAD QUE QUIERO MODIFICAR 
         zooName: event.target.value ,
         // PARA ACCEDER AL VALOR DE INPUT, SIEMPRE USAR event.target.value
      })
   }  

   React.useEffect(()=>{
      fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));},[])

   const handleSpecies=(event)=>{
      // GUARDO EN specie EL valor del boton que recibo como props
      const specie = event.target.value
      // COPIO el objeto zoo pisando la propiedad animals CON un filtrado de TODOS los animales
      //filter recibe un argumento y una condicion a evaluar, si es VERDAD retorna, FALSO no retorna 
      setZoo({
         ...zoo,
         animals: zoo.allAnimals.filter(animal=> animal.specie === specie),
      })
   }
   // recibe el value del boton, cual especie hice click, 
   // modifico el estado del componente zoo.jsx
   //filtro los animales que complen con la condicion de tener la misma especie que el value 
   // retorno un array con los animales que dieron VERDAD 

   const handleAllSpecies=()=>{
      setZoo({
         ...zoo,
         animals: zoo.allAnimals,
      })
   }



   return (
      <div>
         <label>Zoo Name:</label>
         <input value={zoo.zooName}  onChange={handleInputChange} ></input>
         <h1>{zoo.zooName}</h1>
         <Species
         species={zoo.species} 
         handleSpecies={handleSpecies} 
         handleAllSpecies={handleAllSpecies}
         />
         <Animals 
         animals={zoo.animals}
         />
      </div>
   );
}
