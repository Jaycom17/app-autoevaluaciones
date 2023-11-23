import { useEffect, useState } from "react";

import { getEvaluationbyProfessor } from "../api/evaluation";

import { useAuth } from "../context/AuthContext";

import { makeEvaluation } from "../api/evaluation.js";

import { useForm  } from "react-hook-form";

import "./styles/EvaluationItem.css";

function SelfEvaluationItem() {
  const [evaluations, setEvaluations] = useState([]);
  const [generalInfo, setGeneralInfo] = useState({});

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getEvaluationbyProfessor(user.usr_identificacion).then((res) => {
      setEvaluations(res);
      setGeneralInfo(res[0]);
    }).catch((err) => {
      setEvaluations([]);
      console.log(err);
    });
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
          <h3> Perido: {generalInfo.per_nombre}</h3>
          <h3> Nombre del docente: {generalInfo.usu_nombre} {generalInfo.usu_apellido}</h3>
          <h3> Identificacion: {generalInfo.usr_identificacion}</h3>
        </article>
      </div>
      <form onSubmit={handleSubmit((values)=>{
        console.log(values);
      })}>
      <table class="table">
        <tbody>
          {evaluations.map((evaluation, i)=>{
            return(
              <div key={i}>
              <h3>Evaluacion {i+1}:</h3>
              <tr>
                <td data-label="Nombre de labor">{evaluation.lab_nombre}</td>
                <td data-label="Tipo de labor">{evaluation.tl_descripcion}</td>
                <td data-label="Horas">{evaluation.lab_horas}</td>
                <td data-label="Descripción">{evaluation.lab_nombre}</td>
                <td data-label="Acto (si aplica)">Si</td>
                <td data-label="Fecha inicio">{evaluation.per_fechainicio}</td>
                <td data-label="Fecha fin">{evaluation.per_fechafin}</td>
                <td data-label="Estado">{evaluation.eva_estado === 0 ? "En ejecucion" : "cerrado"}</td>
                <td data-label="Resultados">
                  {
                    evaluation.tl_descripcion.toLowerCase() == "docencia"? 
                    <textarea rows="4" cols="30" name="eva_resultado" {...register(`eva_resultado${evaluation.eva_id}`, { required: true })}></textarea>:
                    <input type="file" />
                  }
                </td>
                <td data-label="Evaluación">
                  <input type="number " name="eva_puntaje" {...register(`eva_puntaje${evaluation.eva_id}`, { required: true })}/>
                </td>
              </tr>
              </div>
            )
          })}
        </tbody>
      </table>

      {Object.keys(errors).length > 0 && <span style={{ color: 'red', fontSize: 'smaller' }}>Debe llenar todos los campos</span>}

      <section id="coments">
        <h3>Comentarios:</h3>
        <textarea rows="4" cols="30" ></textarea>
        <button type="submit">Enviar</button>
      </section>
    </form>
    </div>
  );
}

export default SelfEvaluationItem;
