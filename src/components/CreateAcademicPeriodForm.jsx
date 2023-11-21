import { useForm } from "react-hook-form";
import { createPeriod } from "../api/period.js";
import './styles/AcademicPeriod_LaborForm.css';

function CreateAcademicPeriodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div id="form_container">
      <form id="form_create_update" onSubmit={handleSubmit(async (values) => {
        const response = await createPeriod(values);
        if (response) {
          alert("Periodo creado con éxito");
          reset();
        } else {
          alert("Error al crear el Periodo");
        }
      })}>
        <h1>Crear Periodo Academico</h1>
        <label>Nombre del periodo</label>
        {errors.per_nombre && <p style={{ color: 'red', fontSize: 'smaller' }}>llene el campo nombre</p>}
        <input type="text" name="" id="select_text_input" {...register("per_nombre", { required: true })} />
        <label>Fecha Inicio</label>
        {errors.per_fechainicio && <p style={{ color: 'red', fontSize: 'smaller' }}>selecione fecha de inicio</p>}
        <input type="date" name="" id="select_text_input" {...register("per_fechainicio", { required: true })} />
        <label>Fecha Fin</label>
        {errors.per_fechafin && <p style={{ color: 'red', fontSize: 'smaller' }}>selecione fecha de fin</p>}
        <input type="date" name="" id="select_text_input" {...register("per_fechafin", { required: true })} />

        <button type="submit" id="create_update_button">
          Crear Periodo Academico
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni" />
    </div>
  );
}

export default CreateAcademicPeriodForm;