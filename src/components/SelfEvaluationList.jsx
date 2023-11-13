import { useState, useEffect } from "react";

import "./styles/EvaluationList.css"

import SelfEvaluationListItem from "./SelfEvaluationListItem.jsx";

function SelfEvaluationList() {
  const [selfEvaluationList, setSelfEvaluationList] = useState([]);
  
  useEffect(() => {
    setSelfEvaluationList([
      { periodo: "2022-2", estado: "terminada" },
      { periodo: "2023-1", estado: "terminada" },
      { periodo: "2023-2", estado: "activa" },
      { periodo: "2023-2", estado: "activa" }
    ]);
  }, []);

  return (
    <div id="List">
      {selfEvaluationList.map((selfEvaluation, index) =>
      <SelfEvaluationListItem key={index} selfEvaluation={selfEvaluation} />) }
    </div>
  );
}

export default SelfEvaluationList;
