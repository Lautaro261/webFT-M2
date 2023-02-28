import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         <lu>
            {characters.map((personaje, index)=>{
               return (
               <Card 
               key={index}
               name={personaje.name}
               species= {personaje.species}
               gender= {personaje.gender}
               image={personaje.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               />)
            })}
         </lu>
      </div>
   )
}
