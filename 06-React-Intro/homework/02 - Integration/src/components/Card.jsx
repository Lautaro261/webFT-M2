export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         {console.log(props.name)}
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         < img  src={props.image} alt="img"  />
      </div>
   );
}
