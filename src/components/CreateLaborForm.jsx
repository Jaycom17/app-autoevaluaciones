import { useForm } from "react-hook-form";

import { createLabor } from "../api/labor.js";

import "./styles/AcademicPeriod_LaborForm.css";

function CreateLaborForm() {

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
        {errors.tl_descripcion && <p style={{ color: 'red', fontSize: 'smaller' }}>debe seleccionar un tipo</p>}
        <select name="TipoL" id="select_text_input" {...register("tl_descripcion", { required: true })}>
          <option disabled hidden selected>
            Tipo de labor
          </option>
          <option>Docencia</option>
          <option>Trabajos Docencia</option>
          <option>Proyectos Investigación</option>
          <option>Trabajos Investigación</option>
          <option>Administración</option>
          <option>Asesoría</option>
          <option>Servicios</option>
          <option>Extensión</option>
          <option>Capacitación</option>
          <option>Otros Servicios</option>
        </select>
        <label>Nombre de labor</label>
        {errors.lab_nombre && <p style={{ color: 'red', fontSize: 'smaller' }}>debe ingresar el nombre</p>}
        <input type="text" name="" id="select_text_input"  {...register("lab_nombre", { required: true })} />
        <label>Horas asignadas</label>
        {errors.lab_horas && <p style={{ color: 'red', fontSize: 'smaller' }}>debe ingresar las horas</p>}
        <input type="number" name="" id="select_text_input" {...register("lab_horas", { required: true })} />

        <button type="submit" id="create_update_button">
          Crear labor
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  );
}

export default CreateLaborForm;