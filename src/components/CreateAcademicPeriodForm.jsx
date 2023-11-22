import { useForm } from "react-hook-form";
import { createPeriod } from "../api/period.js";
import './styles/AcademicPeriod_LaborForm.css';

function CreateAcademicPeriodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const startDate = watch("per_fechainicio");

  return (
    <div id="form_container">
      <form
        id="form_create_update"
        onSubmit={handleSubmit(async (values) => {
          if (startDate && new Date(values.per_fechafin) <= new Date(startDate)) {
            alert("La fecha de fin debe ser posterior a la fecha de inicio");
            return;
          }

          const startDateObj = new Date(startDate);
          const endDateObj = new Date(values.per_fechafin);

          // Validación para asegurarse de que la diferencia sea al menos de 4 meses
          const minDurationInMillis = 4 * 30 * 24 * 60 * 60 * 1000;
          if (endDateObj - startDateObj < minDurationInMillis) {
            alert("El periodo académico debe ser de al menos 4 meses");
            return;
          }

          // Validación para asegurarse de que la diferencia no sea mayor a 6 meses
          const maxDurationInMillis = 6 * 30 * 24 * 60 * 60 * 1000;
          if (endDateObj - startDateObj > maxDurationInMillis) {
            alert("El periodo académico no puede ser mayor a 6 meses");
            return;
          }

          const response = await createPeriod(values);
          if (response) {
            alert("Periodo creado con éxito");
            reset();
          } else {
            alert("Error al crear el Periodo");
          }
        })}
      >
        <h1>Crear Periodo Academico</h1>

        <label>Nombre del periodo</label>
        {errors.per_nombre && <p style={{ color: 'red', fontSize: 'smaller' }}>Llene el campo nombre</p>}
        <input type="text" id="select_text_input" {...register("per_nombre", { required: true })} />

        <label>Fecha Inicio</label>
        {errors.per_fechainicio && <p style={{ color: 'red', fontSize: 'smaller' }}>Seleccione fecha de inicio</p>}
        <input type="date" id="select_text_input" {...register("per_fechainicio", { required: true })} />

        <label>Fecha Fin</label>
        {errors.per_fechafin && <p style={{ color: 'red', fontSize: 'smaller' }}>Seleccione fecha de fin</p>}
        <input type="date" id="select_text_input" {...register("per_fechafin", { required: true })} />

        <button type="submit" id="create_update_button">
          Crear Periodo Academico
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni" />
    </div>
  );
}

export default CreateAcademicPeriodForm;
