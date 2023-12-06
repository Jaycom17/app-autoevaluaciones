import { useEffect, useState } from "react";

import { getAverageScoreByLabor, getAverageScoreByPeriod, getNumberOfEvaluationsByLaborType } from "../api/stats";

import BarsGraphic from "./BarsGraphic";

import "./styles/ShowStatics.css";

function ShowStatics() {
    const [averageScoreByLabor, setAverageScoreByLabor] = useState([]);
    const [averageScoreByPeriod, setAverageScoreByPeriod] = useState([]);
    const [numberOfEvaluationsByLaborType, setNumberOfEvaluationsByLaborType] = useState([]);

    useEffect(() => {
        getAverageScoreByLabor().then((res) => {
            setAverageScoreByLabor(res);
        }).catch((err) => {
            console.log(err);
        });

        getAverageScoreByPeriod().then((res) => {
            setAverageScoreByPeriod(res);
        }).catch((err) => {
            console.log(err);
        });

        getNumberOfEvaluationsByLaborType().then((res) => {
            setNumberOfEvaluationsByLaborType(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    if (!averageScoreByLabor || !averageScoreByPeriod || !numberOfEvaluationsByLaborType) {
        return (
            <div id="graphic-list">
                <h3>Puntaje promedio por labor</h3>
                <p>No hay datos para mostrar</p>
                <h3>Puntaje promedio por periodo</h3>
                <p>No hay datos para mostrar</p>
                <h3>Numero de evaluaciones por tipo de labor</h3>
                <p>No hay datos para mostrar</p>
            </div>
        );
    }

  return (
    <div id="graphic-list">
      <h3>Puntaje promedio por labor</h3>
      <BarsGraphic data={averageScoreByLabor} title={"Puntaje promedio por labor"}></BarsGraphic>
      <h3>Puntaje promedio por periodo</h3>
      <BarsGraphic data={averageScoreByPeriod} title={"Puntaje promedio por periodo"}></BarsGraphic>
      <h3>Numero de evaluaciones por tipo de labor</h3>
      <BarsGraphic data={numberOfEvaluationsByLaborType} title={"Numero de evaluaciones por tipo de labor"}></BarsGraphic>
    </div>
  );
}

export default ShowStatics;