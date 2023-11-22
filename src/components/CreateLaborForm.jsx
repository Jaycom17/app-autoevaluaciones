import { useForm } from "react-hook-form";

import { createLabor } from "../api/labor.js";

import { useEffect, useState } from "react";

import "./styles/AcademicPeriod_LaborForm.css";

function CreateLaborForm() {

  const[currentLaborType, setCurrentLaborType] = useState([]);

  useEffect(()=> {
    setCurrentLaborType([{tl_descripcion:"Docencia"},
                          {tl_descripcion:"Trabajos Docencia"},
                          {tl_descripcion:"Proyectos Investigación"},
                          {tl_descripcion:"Trabajos Investigación"},
                          {tl_descripcion:"Administración"},
                          {tl_descripcion:"Asesoría"},
                          {tl_descripcion:"Servicios"},
                          {tl_descripcion:"Extensión"},
                          {tl_descripcion:"Capacitación"},
                          {tl_descripcion:"Otros Servicios"}]);
  }); 


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div id="form_container">
      <form id="form_create_update" onSubmit={handleSubmit(async (values) => {
        const response = await createLabor(values);
        if (response) {
          alert("Labor creada con éxito");
          reset();
        } else {
          alert("Error al crear la labor");
        }
      })}>
        <h1>Crear labor</h1>
        <label>Tipo de labor</label>
        {errors.TL_DESCRIPCION && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes seleccionar un tipo de labor</p>}
        <select name="TipoL" id="select_text_input" {...register("TL_DESCRIPCION", { required: true })}>
          <option disabled hidden selected>
            Tipo de labor
          </option>
          {currentLaborType.map((tipo, i) => (
            <option key={i}>{tipo.tl_descripcion}</option>
          ))}
        </select>
        <label>Nombre de labor</label>
        {errors.LAB_NOMBRE && <p style={{ color: 'red', fontSize: 'smaller' }}>Debe ingresar el nombre</p>}
        <input type="text" name="" id="select_text_input"  {...register("LAB_NOMBRE", { required: true })} />
        <label>Horas asignadas</label>
        {errors.LAB_HORAS && <p style={{ color: 'red', fontSize: 'smaller' }}>Debe ingresar las horas</p>}
        <input type="number" name="" id="select_text_input" min="0" {...register("LAB_HORAS", { required: true })} />

        <button type="submit" id="create_update_button">
          Crear labor
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  );
}

export default CreateLaborForm;