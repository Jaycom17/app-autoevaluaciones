import { useState, useEffect } from "react";
import React from 'react';

import "./styles/List.css"

import LaborListItem from "./LaborListItem.jsx";

function LaborList() {
  const [laborList, setLaborList] = useState([]);
  
  useEffect(() => {
    setLaborList([
      { nombre: "Abrazar un árbol ll A", horasAsignadas: 32, tipoLabor: "Docencia"},
      { nombre: "Piggy Bank ll B", horasAsignadas: 32, tipoLabor: "Docencia"},
      { nombre: "Que pansho l A", horasAsignadas: 32, tipoLabor: "Docencia"},
      { nombre: "Para terminar l B", horasAsignadas: 32, tipoLabor: "Docencia"},
      { nombre: "Carlos sos un genio ll C", horasAsignadas: 16, tipoLabor: "Docencia"},
      { nombre: "Millonarios lll C", horasAsignadas: 64, tipoLabor: "Docencia"},
    ]);
  }, []);


    const redirigirAMismaPagina = () => {
      window.location.href = window.location.href; // Redirige a la misma página
    };

  return (
    <>
    <div id="list">
      {laborList.map((laborItem, index) =>
      <LaborListItem key={index} labor={laborItem} />) }
    </div>
    </>
  );
}

export default LaborList;