import { useForm } from "react-hook-form";

import { getLaborById, updateLabor } from "../api/labor.js";

import "./styles/AcademicPeriod_LaborForm.css";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function UpdateLaborForm() {

  const [currentLabor, setCurrentLabor] = useState({});

  const[currentLaborType, setCurrentLaborType] = useState([]);

  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getLaborById(id).then((res) => {
      setCurrentLabor(res);
    }).catch((err) => {
      console.log(err);
    });

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
  }, []);

  return (
    <div id="form_container">
      <form id="form_create_update" onSubmit={handleSubmit (async (values) => {
        
console.log(values);
        const response = await updateLabor(id, values);
        if (response) {
          alert("Labor actualizada con éxito");
          reset();
        } else {
          alert("Error al actualizar la labor");
        }
      })}>
        <h1>Actualizar labor</h1>
        <label>Tipo de labor</label>
        {errors.TL_DESCRIPCION && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes seleccionar un tipo de labor</p>}
        <select name="TipoL" id="select_text_input" {...register("tl_descipcion", { required: true })}>
          {currentLaborType.map((tipo, i) => (
            tipo === currentLabor.tl_descripcion ? <option key={i} value={tipo.tl_descripcion} selected>{tipo.tl_descripcion}</option> : <option key={i} value={tipo.tl_descripcion}>{tipo.tl_descripcion}</option>
          ))}
        </select>
        <label>Nombre de labor</label>
        {errors.LAB_NOMBRE && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes ingresar el nombre</p>}

        <input
          type="text"
          name="LAB_NOMBRE"
          id="select_text_input"
          {...register("lab_nombre", { required: true })}
          defaultValue={currentLabor.lab_nombre}
        />
        
        <label>Horas asignadas</label>
        {errors.LAB_HORAS && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes ingresar las horas</p>}
        <input type="number" name="" id="select_text_input" min="0" defaultValue={currentLabor.lab_horas} {...register("lab_horas", { required: true })} />
        <button type="submit" id="create_update_button">
          Confirmar cambios
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  )
}

export default UpdateLaborForm;