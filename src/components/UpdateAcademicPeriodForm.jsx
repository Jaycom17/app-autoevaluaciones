import { set, useForm } from "react-hook-form";

import { getPeriodById, updatePeriod } from "../api/period.js";

import "./styles/AcademicPeriod_LaborForm.css";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function UpdateAcademicPeriodForm() {

  const [currentPeriod, setCurrentPeriod] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  useEffect(() => {
    getPeriodById(id).then((res) => {
      setCurrentPeriod(res);
      reset({
        per_nombre: res.per_nombre,
        per_fechaInicio: res.per_fechainicio,
        per_fechaFin: res.per_fechafin,
      });

    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPeriod({ ...currentPeriod, [name]: value });
  };

  return (
    <div id="form_container">
      <form id="form_create_update" onSubmit={handleSubmit (async (values) => {
        const response = await updatePeriod(id, values);
        if (response) {
          alert("Período actualizado con éxito");
          navigate("/academic-periods",{replace:true});
          setCurrentPeriod(values)
          reset();
        }else{
          alert("Error al actualizar el período");
        }
      })}>
        <h1>Editar Perodo Academico</h1>
        <label>Nombre de Periodo</label>
        {errors.per_nombre && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes dar un nombre de periodo</p>}
        <input type="text" name="" id="select_text_input" defaultValue={currentPeriod.per_nombre} onChange={handleInputChange} {...register("per_nombre", { required: true })} />
        <label>Fecha Inicio</label>
        {errors.per_fechaInicio && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes seleccionar una fecha de inicio</p>}
        <input type="date" name="" id="select_text_input" defaultValue={currentPeriod.per_fechainicio} onChange={handleInputChange} {...register("per_fechainicio", { required: true })} />
        <label>Fecha Fin</label>
        {errors.per_fechaFin && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes seleccionar una fecha de fin</p>}
        <input type="date" name="" id="select_text_input" defaultValue={currentPeriod.per_fechafin} onChange={handleInputChange} {...register("per_fechafin", { required: true })} />
        <button type="submit" id="create_update_button">
          Actualizar
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni" />
    </div>
  );
}

export default UpdateAcademicPeriodForm;