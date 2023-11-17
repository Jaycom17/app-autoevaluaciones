import { useEffect, useState } from "react";
import "./styles/EvaluationItem.css";

function SelfEvaluationItem() {
  const [labors, setLabors] = useState([]);

  useEffect(() => {
    setLabors([
      {
        nombreLabor: "Electiva: Bodega de datos",
        tipoLabor: "Docencia",
        horas: "64",
        descripcion: "Ingenieria de sistemas: Obligatoria 2023",
        acto: "X",
        fechaInicio: "Sep-10-2023",
        fechaFin: "Feb-10-2024",
        estado: "Terminado"
      },
      {
        nombreLabor: "Otro trabajo",
        tipoLabor: "Investigación",
        horas: "48",
        descripcion: "Trabajo adicional en informática",
        acto: "X",
        fechaInicio: "May-15-2023",
        fechaFin: "Ago-20-2023",
        estado: "En progreso"
      },
      {
        nombreLabor: "Proyecto de diseño",
        tipoLabor: "Diseño",
        horas: "36",
        descripcion: "Diseño de interiores para una empresa",
        acto: "X",
        fechaInicio: "Jul-02-2023",
        fechaFin: "Nov-30-2023",
        estado: "Planificado"
      },
      {
        nombreLabor: "Tarea de ejemplo",
        tipoLabor: "Tarea",
        horas: "12",
        descripcion: "Ejemplo de tarea",
        acto: "X",
        fechaInicio: "Oct-10-2023",
        fechaFin: "Oct-20-2023",
        estado: "Terminado"
      }
    ]
    );
  },[]);

  return (
    <div id="evaluation-item">
      <h1>
        Departamento de
        Sistemas
      </h1>
      <h2 color="#005B9A">
        Facultad de Ingenieria Electronica y Telecomunicaciones - Universidad
        Del Cauca
      </h2>
      <h2>
        Evaluación de actividades de labor docente
      </h2>
      <div id="information">
        <article id="data-professor">
          <h3> Perido: 2020-1</h3>
          <h3> Nombre del docente: juan</h3>
          <h3> Identificacion: 1010020202</h3>
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
                <td data-label="Nombre de labor">{labor.nombreLabor}</td>
                <td data-label="Tipo de labor">{labor.tipoLabor}</td>
                <td data-label="Horas">{labor.horas}</td>
                <td data-label="Descripción">{labor.descripcion}</td>
                <td data-label="Acto (si aplica)">{labor.acto}</td>
                <td data-label="Fecha inicio">{labor.fechaInicio}</td>
                <td data-label="Fecha fin">{labor.fechaFin}</td>
                <td data-label="Estado">{labor.estado}</td>
                <td data-label="Resultados">
                  {
                    labor.tipoLabor == "Docencia"? 
                    <textarea rows="4" cols="30"></textarea>:
                    <input type="file" />
                  }
                </td>
                <td data-label="Evaluación">
                  <input type="number " />
                </td>
              </tr>
              </div>
            )
          })}
        </tbody>
      </table>
      <section id="coments">
        <h3>Comentarios:</h3>
        <textarea rows="4" cols="30"></textarea>
        <button>Enviar</button>
      </section>
    </div>
  );
}

export default SelfEvaluationItem;
