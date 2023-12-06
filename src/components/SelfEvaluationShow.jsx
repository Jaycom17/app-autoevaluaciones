import { useEffect, useState } from "react";

import { getEvaluationbyProfessor } from "../api/evaluation.js";

import { useParams } from 'react-router-dom';   

import "./styles/EvaluationItem.css";

const API_URL = import.meta.env.VITE_API_URL;

function SelfEvaluationShow() {
  const [evaluations, setEvaluations] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({});

  const { userId, perName } = useParams();

  useEffect(() => {
    getEvaluationbyProfessor(userId).then((res) => {
      setEvaluations(res.filter((evaluation) => evaluation.per_nombre === perName));
      setGeneralInfo(res[0]);
    }).catch((err) => {
      setEvaluations([]);
      console.log(err);
    });
  },[]);


  if(evaluations.length === 0) return (<div>No tiene evaluaciones activas</div>);

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
          <h3> Perido: {perName}</h3>
          <h3> Nombre del docente: {generalInfo.usu_nombre} {generalInfo.usu_apellido}</h3>
          <h3> Identificacion: {generalInfo.usr_identificacion}</h3>
        </article>
      </div>
      <table class="table">
        <tbody>
          {evaluations.map((evaluation, i)=>{
            return(
              <div key={i}>
              <h3>Evaluacion {i+1}:</h3>
              <tr>
                <td data-label="Nombre de labor">{evaluation.lab_nombre}</td>
                <td data-label="Fecha inicio y fin">
                  {evaluation.per_fechainicio}
                  <br />
                  {evaluation.per_fechafin}
                </td>
                <td data-label="Resultados">{evaluation.tl_descripcion.toLowerCase() === "docencia" ? evaluation.eva_resultado : evaluation.eva_resultado === "" ? "" : <a id="btn-download" href={`${API_URL}/saveDocument/${evaluation.eva_resultado}`}>Descargar</a>}</td>
                <td data-label="Evaluación">{evaluation.eva_puntaje}</td>
              </tr>
              </div>
            )
          })}
        </tbody>
      </table>

      <section id="coments">
        <h3>Comentarios:</h3>
        <textarea rows="4" cols="30" readOnly></textarea>
      </section>
    </div>
  );
}

export default SelfEvaluationShow;
