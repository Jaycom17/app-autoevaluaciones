import { useState, useEffect } from "react";
import React from 'react';

import { getLabors } from "../api/labor.js";
import { deleteLabor } from '../api/labor.js';

import "./styles/List.css"

import LaborListItem from "./LaborListItem.jsx";

function LaborList() {
  const [laborList, setLaborList] = useState([]);

  const handleDeleteItem  = async (id) => {
    const response = await deleteLabor(id);
    if (response) {
      const newLaborList = laborList.filter((labor) => labor.lab_id !== id);
      setLaborList(newLaborList);
      alert("Labor eliminada con éxito");
    } else {
        alert("Error al eliminar la labor");
    }
};
  
  useEffect(() => {
    getLabors().then((res) => {
      setLaborList(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
    <div id="list">
      {laborList.map((laborItem) =>
      <LaborListItem key={laborItem.lab_id} labor={laborItem} onDelete={handleDeleteItem }/>) }
    </div>
    </>
  );
}

export default LaborList;