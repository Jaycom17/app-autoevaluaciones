import { useState, useEffect } from "react";
import React from 'react';

import { getPeriods, deletePeriod } from "../api/period.js";

import "./styles/AcademicPeriodList.css"

import AcademicPeriodListItem from "./AcademicPeriodListItem.jsx";

function AcademicPeriodList() {

  const [academicPeriodList, setAcademicPeriodList] = useState([]);
  
  const handleDeleteItem  = async (id) => {
    const response = await deletePeriod(id);
    if (response) {
      alert("Periodo eliminado con éxito");
      getPeriods().then((res) => {
        setAcademicPeriodList(res);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      alert("Error al eliminar el periodo");
    }
  };

  useEffect(() => {
    getPeriods().then((res) => {
      setAcademicPeriodList(res);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <>
    <div id="list">
      {academicPeriodList.map((academicPeriod) =>
      <AcademicPeriodListItem key={academicPeriod.per_id} academicList={academicPeriod} onDelete={handleDeleteItem} />) }
    </div>
    </>
  );
}

export default AcademicPeriodList;
