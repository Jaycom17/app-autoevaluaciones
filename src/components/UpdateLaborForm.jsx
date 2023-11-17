import "./styles/AcademicPeriod_LaborForm.css";

function UpdateLaborForm() {
  return (
    <div id="form_container">
      <form id="form_create_update">
        <h1>Actualizar labor</h1>
        <label>Tipo de labor</label>
        <select name="TipoL" id="select_text_input" required>
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
        <input type="text" name="" id="select_text_input" required="" />
        <label>Horas asignadas</label>
        <input type="text" name="" id="select_text_input" required="" />

        <button type="submit" id="create_update_button">
          Confirmar cambios
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  )
}

export default UpdateLaborForm;