import React from 'react';
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
      console.log(event)
       setZoo(zoo.zooName = event) 
   }  
   return (
      <div>
         <label>zoo Name</label>
         <input value={zoo.zooName}  onChange={()=>handleInputChange} ></input>
         <h1>{zoo.zooName}</h1>
      </div>
   );
}
