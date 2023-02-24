import React from "react";

const studentName = "Lautaro";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(props) {
  // el código de tu componente acá
  return(
    <div>
      <h1>Holiss</h1>
      <h3>{studentName}</h3>
      <ul>
        {
          techSkills.map((item)=>{
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
