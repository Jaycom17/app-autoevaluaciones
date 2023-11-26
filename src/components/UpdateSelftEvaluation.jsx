import { useEffect, useState } from "react";

import { getLabors } from "../api/labor.js";
import { getProfessors } from "../api/user.js";
import { getPeriods } from "../api/period.js";

import { useForm } from "react-hook-form";

import { createEvaluation, getEvaluationbyProfessor, deleteEvaluation } from "../api/evaluation.js";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import "./styles/EvaluationItem.css";
import "./styles/EvaluationForm.css";

function UpdateSelfEvaluation() {
  const [labors, setLabors] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [currentEvaluations, setCurrentEvaluations] = useState([]);
  const [showArticle, setShowArticle] = useState(false);
  const [evaluations, setEvaluations] = useState([]);
  const [canBeUpdated, setCanBeUpdated] = useState(false);

  const { usrId, perNombre } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const newEvaluation = () => {
    if(evaluations.length < labors.length){ setEvaluations([...evaluations, { id: evaluations.length + 1 }])};
  };

  const removeEvaluation = () => {
    if(evaluations.length > 0){ setEvaluations(evaluations.slice(0, -1))};
  };

  useEffect(() => {

    getLabors().then((res) => {
      setLabors(res);
    }).catch((err) => {
      setLabors([]);
      console.log(err);
    });

    getProfessors().then((res) => {
      setProfessors(res);
    }).catch((err) => {
      setProfessors([]);
      console.log(err);
    });

    getPeriods().then((res) => {
      setPeriods(res);
    }).catch((err) => {
      setPeriods([]);
      console.log(err);
    });

    getEvaluationbyProfessor(usrId).then((res) => {
      setCurrentEvaluations(res.filter((evaluation) => evaluation.per_nombre === perNombre));
      setCanBeUpdated(res[0].eva_estado === 0);

    }).catch((err) => {
      setCurrentEvaluations([]);
      console.log(err);
    });
  }, []);

  return (
    <div id="evaluation-item">
      <h1>Departamento de Sistemas</h1>
      <h2>
        Facultad de Ingenieria Electronica y Telecomunicaciones - Universidad
        Del Cauca
      </h2>
      <h2>Evaluación de actividades de labor docente</h2>

      <button onClick={()=>setShowArticle(!showArticle)} id="show-current-data">Mostrar informacion actual</button>

      {showArticle && (
        <article id="current-data">
          <p>Docente: {currentEvaluations[0].usu_nombre} {currentEvaluations[0].usu_apellido}</p>
          <p>perido: {currentEvaluations[0].per_nombre}</p>
          <table id="current-data-table">
            <thead>
              <tr>
                <th>Labor</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {currentEvaluations.map((evaluation) => (
                <tr key={evaluation.eva_id}>
                  <td>{evaluation.lab_nombre}</td>
                  <td>{evaluation.eva_estado === 1 ? "terminada" : "en ejcucion"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      )}

      {canBeUpdated === false ? <h3>No se puede actualizar, ya se encuentra terminada</h3> :
      <>
      <div id="information">
        <article id="data-professor">
        <select name="usr_id" id="select-important-professor">
          <option disabled hidden value="" selected>
            Seleccione un docente
          </option>
          {professors.map((professor) => (
            <option key={professor.usr_identificacion} value={professor.usr_identificacion}>
              {professor.usu_nombre} {professor.usu_apellido} - {professor.usr_identificacion}
            </option>
          ))}
        </select>
        <select name="eva_period" id="select-important-period">
          <option disabled hidden value="" selected>
            Seleccione un perido
          </option>
          {periods.map((period) => (
            <option key={period.per_id} value={period.per_nombre}>
              {period.per_nombre}
            </option>
          ))}
        </select>
        </article>
      </div>
      
      <form id="form" onSubmit={handleSubmit ((values)=>{

        let usr_id = document.getElementById("select-important-professor").value;
        let eva_period = document.getElementById("select-important-period").value;

        if (usr_id === "") {
          alert("Debe seleccionar un docente");
          return;
        }

        if (eva_period === "") {
          alert("Debe seleccionar un periodo");
          return;
        }

        const evaluations = Object.keys(values).reduce((result, key) => {
          const [field, index] = key.split(/(\d+)/).filter(Boolean);
        
          if (field && index !== undefined) {
            if (!result[index]) {
              result[index] = {};
            }
        
            result[index][field] = values[key];
          }
        
          return result;
        }, []);

        if(evaluations.length === 0){
          alert("Debe agregar al menos una evaluación");
          return;
        }

        let evaluation = {usr_id, eva_period, evaluations};
        console.log(evaluation);

        createEvaluation(evaluation).then((res) => {
          if (res) {
            currentEvaluations.forEach(evaluation => {
              deleteEvaluation(evaluation.eva_id).then(() => {}).catch(()=>{})
            })
            reset();
            document.getElementById("select-important-professor").value = "";
            document.getElementById("select-important-period").value = "";
            alert("Evaluación creada con éxito");
            navigate("/", {replace: true});
          } else {
            alert("Error al crear la evaluación");
          }}).catch((err) => {
            alert("Error al crear la evaluación");
          });

      })}>

      {evaluations.map((evaluation, i) => (
        <div key={evaluation.id} id="evaluation">
          <div id="div-form">
        <label id="labor-label">Labor: </label>
        <select name="eva_labor" id="labor-select" {...register(`eva_labor${i}`, {required: true})} defaultValue="">
          <option disabled hidden value="">
            Seleccione una labor
          </option>
          {labors.map((labor) => (
            <option key={labor.lab_id} value={labor.lab_nombre}>
              {labor.lab_nombre}
            </option>
          ))}
        </select>

        <label id="labor-label">Estado</label>
        <select name="eva_state" id="labor-select" {...register(`eva_state${i}`, {required: true})} defaultValue="">
          <option disabled hidden value="">
            Seleccione un estado
          </option>
          <option value="0">En ejecución</option>
          <option value="1">Terminado</option>
        </select>

        </div>
        <div id="divisor"></div>
        </div>
        
      ))}

      {Object.keys(errors).length > 0 && <span style={{ color: 'red', fontSize: 'smaller' }}>Debe llenar todos los campos</span>}
      
      <section id="send">
        <button type="submit">Actualizar</button>
      </section>
      </form>
      <div id="control-buttons">
      <button onClick={newEvaluation} id="new-evaluation">
        Agregar Evaluación
      </button>
      <button onClick={removeEvaluation} id="delete-evaluation">
        quitar Evaluación
      </button>
      </div>
      </>
  }
    </div>
  );
}

export default UpdateSelfEvaluation;
