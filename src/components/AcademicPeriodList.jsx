import { useState, useEffect } from "react";
import React from 'react';

import "./styles/AcademicPeriodList.css"

import AcademicPeriodListItem from "./AcademicPeriodListItem.jsx";

function AcademicPeriodList() {
  const [academicPeriodList, setAcademicPeriodList] = useState([]);
  
  useEffect(() => {
    setAcademicPeriodList([
      { periodo: "2022-2", dateStart: "01/07/22", dateEnd: "01/11/22"},
      { periodo: "2023-1", dateStart: "01/01/23", dateEnd: "01/06/22" },
      { periodo: "2023-2", dateStart: "01/07/23", dateEnd: "01/11/23" },
      { periodo: "2023-2", dateStart: "01/07/23", dateEnd: "01/11/23" }
    ]);
  }, []);

  return (
    <>
    <div id="list">
      {academicPeriodList.map((academicPeriod, index) =>
      <AcademicPeriodListItem key={index} academicList={academicPeriod} />) }
    </div>
    </>
  );
}

export default AcademicPeriodList;
