// Importaciones
import './styles/NavigationItem.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarPlus, faList, faPencilAlt, faListAlt, faCheck, faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationItem = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div id="navbar">
      <div className="icono-hamburguesa" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <a href="#" id="pagina-principal">
        <FontAwesomeIcon icon={faHome} /> Página Principal
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faCalendarPlus} /> Crear Periodo Académico
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faList} /> Lista De Períodos Académicos
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faPencilAlt} /> Crear Labor
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faListAlt} /> Lista de Labores
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faCheck} /> Autoevaluación
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faListAlt} /> Lista De Autoevaluaciones
      </a>

      {/* Menú desplegable */}
      <div className={`menu-desplegable ${menuVisible ? 'visible' : ''}`}>
        <a href="#" id="pagina-principal-movil">
          <FontAwesomeIcon icon={faHome} /> Página Principal
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCalendarPlus} /> Crear Periodo Académico
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faList} /> Lista De Períodos Académicos
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPencilAlt} /> Crear Labor
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faListAlt} /> Lista de Labores
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCheck} /> Autoevaluación
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faListAlt} /> Lista De Autoevaluaciones
        </a>
      </div>
    </div>
  );
};

export default NavigationItem;
