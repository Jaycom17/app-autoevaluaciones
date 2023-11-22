import { useEffect, useState } from "react";

import { getLabors } from "../api/labor.js";
import { getProfessors } from "../api/user.js";
import { getPeriods } from "../api/period.js";

import "./styles/EvaluationItem.css";
import "./styles/EvaluationForm.css";

function SelfEvaluationForm() {
  const [labors, setLabors] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [periods, setPeriods] = useState([]);

  const [evaluations, setEvaluations] = useState([]);

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
      console.log(res);
      setPeriods(res);
    }).catch((err) => {
      setPeriods([]);
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

      <div id="information">
        <article id="data-professor">
        <select name="professor" id="select-important">
          <option disabled hidden selected>
            Seleccione un docente
          </option>
          {professors.map((professor) => (
            <option key={professor.usr_identificacion} value={professor.usr_identificacion}>
              {professor.usu_nombre} {professor.usu_apellido} - {professor.usr_identificacion}
            </option>
          ))}
        </select>
        <select name="professor" id="select-important">
          <option disabled hidden selected>
            Seleccione un perido
          </option>
          {periods.map((period) => (
            <option key={period.per_id} value={period.per_id}>
              {period.per_nombre}
            </option>
          ))}
        </select>
        </article>
      </div>
      
      <form action="" id="form">

      {evaluations.map((evaluation) => (
        <div key={evaluation.id} id="evaluation">
          <div id="div-form">
        <label id="labor-label">Labor: </label>
        <select name="labor" id="labor-select">
          <option disabled hidden selected>
            Seleccione una labor
          </option>
          {labors.map((labor) => (
            <option key={labor.lab_id} value={labor.lab_id}>
              {labor.lab_nombre}
            </option>
          ))}
        </select>

        <label id="labor-label">Estado</label>
        <select name="status" id="labor-select">
          <option disabled hidden selected>
            Seleccione un estado
          </option>
          <option value="0">En ejecución</option>
          <option value="1">Terminado</option>
        </select>
        </div>
        <div id="divisor"></div>
        </div>
      ))}
      </form>
      <div id="control-buttons">
      <button onClick={newEvaluation} id="new-evaluation">
        Agregar Evaluación
      </button>
      <button onClick={removeEvaluation} id="delete-evaluation">
        quitar Evaluación
      </button>
      </div>
      <section id="send">
        <button>Crear</button>
      </section>
    </div>
  );
}

export default SelfEvaluationForm;
