import { useEffect, useState } from "react";
import "./styles/EvaluationItem.css";
import "./styles/EvaluationForm.css"

function SelfEvaluationForm({ professor }) {
  const [labors, setLabors] = useState([]);
    const [evaluation, setEvaluation] = useState({
        nombreLabor: "",
        tipoLabor: "",
        horas: "",
        descripcion: "",
        acto: "X",
        fechaInicio: "Sep-10-2023",
        fechaFin: "Feb-10-2024",
        estado: "En ejecución"
      });

    const newEvaluation = () =>{
        setLabors([...labors, evaluation]);
    }

  useEffect(() => {
    setLabors([evaluation]);
  },[]);

  return (
    <div id="evaluation-item">
      <h1>
        Departamento de
        Sistemas
      </h1>
      <h2>
        Facultad de Ingenieria Electronica y Telecomunicaciones - Universidad
        Del Cauca
      </h2>
      <h2>
        Evaluación de actividades de labor docente
      </h2>
      <div id="information">
        <article id="data-professor">
          <h3> Perido: {professor.labor.period}</h3>
        </article>
        <article id="data-general">
        </article>
      </div>
      <table class="table">
        <tbody>
          {labors.map((labor, i)=>{
            return(
              <div key={i}>
              <h3>Evaluacion {i+1}:</h3>
              <tr>
                <td data-label="Nombre de labor"><select name="options" id="options"></select></td>
                <td data-label="Tipo de labor"><input type="text" disabled/></td>
                <td data-label="Horas"><input type="number" /></td>
                <td data-label="Descripción"><textarea rows="4" cols="30"></textarea></td>
                <td data-label="Acto (si aplica)">{labor.acto}</td>
                <td data-label="Fecha inicio">{labor.fechaInicio}</td>
                <td data-label="Fecha fin">{labor.fechaFin}</td>
                <td data-label="Estado">{labor.estado}</td>
              </tr>
              </div>
            )
          })}
        </tbody>
      </table>
      <button onClick={newEvaluation} id="new-evaluation">Agregar Evaluación</button>
      <section id="send">
        <button>Crear</button>
      </section>
    </div>
  );
}

export default SelfEvaluationForm;
