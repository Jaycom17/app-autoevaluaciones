import "./styles/AcademicPeriod_LaborForm.css";

function UpdateAcademicPeriodForm() {
  return (
    <div id="form_container">
      <form id="form_create_update">
        <h1>Editar Perodo Academico</h1>
        <label>Nombre de Periodo</label>
        <input type="text" name="" id="select_text_input" required="" />
        <label>Fecha Inicio</label>
        <input type="date" name="" id="select_text_input" required="" />
        <label>Fecha Fin</label>
        <input type="date" name="" id="select_text_input" required="" />
        <button type="submit" id="create_update_button">
          Actualizar
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  );
}

export default UpdateAcademicPeriodForm;