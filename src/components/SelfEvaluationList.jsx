import { useState, useEffect } from "react";

import "./styles/EvaluationList.css"

import SelfEvaluationListItem from "./SelfEvaluationListItem.jsx";

import { getEvaluations, deleteEvaluation } from "../api/evaluation.js";

import { useNavigate } from "react-router-dom";

function SelfEvaluationList() {
  const [selfEvaluationList, setSelfEvaluationList] = useState([]);
  const [selfEvaluationListAll, setSelfEvaluationListAll] = useState([]);
  const [selfEvaluationAux, setSelfEvaluationAux] = useState([]);
  
  const navigate = useNavigate();

  const delEvaluation = (usr_identification, per_nombre) => {
    selfEvaluationListAll.forEach((evaluation) => {
      if (evaluation.usr_identificacion === usr_identification && evaluation.per_nombre === per_nombre) {
        deleteEvaluation(evaluation.eva_id).then(() => {}).catch(() => {
          alert("No se pudo eliminar la evaluación");
          return;
        });
      }
    });
    let selfEvaluationListAux = [];
    selfEvaluationListAux = selfEvaluationList.filter((evaluation) => {
      return !(evaluation.usr_identificacion === usr_identification && evaluation.per_nombre === per_nombre);
    });
    setSelfEvaluationList(selfEvaluationListAux);
    alert("Evaluación eliminada correctamente");
  }

  const handleUpdate = (usr_identificacion, per_nombre) => {
    navigate(`/self-evaluations/update/${usr_identificacion}/${per_nombre}`, {replace: true});
  }


  const handleShow = (usr_identificacion, perName)=>{
    navigate(`/self-evaluations/show/${usr_identificacion}/${perName}`, {replace: true});
  }

  const searchEvaluation = (event) => {
    let search = event.target.value;
    let selfEvaluationListAux = [];
    selfEvaluationAux.forEach((evaluation) => {
      if (evaluation.usu_nombre.toLowerCase().includes(search.toLowerCase()) || evaluation.per_nombre.toLowerCase().includes(search.toLowerCase()) || evaluation.usu_apellido.toLowerCase().includes(search.toLowerCase())) {
        selfEvaluationListAux.push(evaluation);
      }
    });
    setSelfEvaluationList(selfEvaluationListAux);
  }
  
  useEffect(() => {
    getEvaluations().then((res) => {
      setSelfEvaluationListAll(res);
      let selfEvaluationListAux = [];
      let counting = {};

      res.forEach((evaluation) => {
        if (counting[`${evaluation.usr_identificacion}-${evaluation.per_nombre}`] === undefined) {
          selfEvaluationListAux.push(evaluation);
          counting[`${evaluation.usr_identificacion}-${evaluation.per_nombre}`] = 1;
        }
      });

      setSelfEvaluationList(selfEvaluationListAux);
      setSelfEvaluationAux(selfEvaluationListAux)
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div id="main">
      <input id="search-evaluation" type="text" placeholder="Busca por docente o periodo" onChange={searchEvaluation}/>
      {selfEvaluationList.length === 0 ? <h1 id="no-evaluation">No hay evaluaciones</h1>:
      <div id="List">
      {selfEvaluationList.map((selfEvaluation) =>
      <SelfEvaluationListItem key={selfEvaluation.eva_id} selfEvaluation={selfEvaluation} onDelete={delEvaluation} onShow={handleShow} onUpdate={handleUpdate}/>) }
    </div>
}
    </div>
  );
}

export default SelfEvaluationList;
