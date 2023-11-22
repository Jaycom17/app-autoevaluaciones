import { useForm  } from "react-hook-form";

import { getLaborById, updateLabor } from "../api/labor.js";

import "./styles/AcademicPeriod_LaborForm.css";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


function UpdateLaborForm() {

  const [currentLabor, setCurrentLabor] = useState({});

  const[currentLaborType, setCurrentLaborType] = useState([]);

  const {id} = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    getLaborById(id).then((res) => {
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
      setCurrentLabor(res);

      reset({
        tl_descripcion:res.tl_descripcion,
        lab_nombre:res.lab_nombre,
        lab_horas:res.lab_horas,
      });

    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentLabor({ ...currentLabor, [name]: value });
  };


  return (
    <div id="form_container">
      <form id="form_create_update" onSubmit={handleSubmit (async (values) => {
        const response = await updateLabor(id, values);
        if (response) {
          alert("Labor actualizada con éxito");
          navigate("/labor",{replace:true});
          setCurrentLabor(values)
          setCurrentLaborType(values.tl_descripcion)
          reset();
        } else {
          alert("Error al actualizar la labor");
        }
      })}>
        <h1>Actualizar labor</h1>
        <label>Tipo de labor</label>
        {errors.TL_DESCRIPCION && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes seleccionar un tipo de labor</p>}
        <select name="TipoL" id="select_text_input" onChange={handleInputChange} {...register("TL_DESCRIPCION", { required: true })}>
          <option disabled hidden selected >
            {currentLabor.tl_descripcion}
          </option>
          {currentLaborType.map((tipo, i) => (
            <option key={i}>{tipo.tl_descripcion}</option>
          ))}
        </select>
        <label>Nombre de labor</label>
        {errors.LAB_NOMBRE && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes ingresar el nombre</p>}
        <input type="text" name="" id="select_text_input" defaultValue={currentLabor.lab_nombre} onChange={handleInputChange} {...register("LAB_NOMBRE", { required: true })} />
        <label>Horas asignadas</label>
        {errors.LAB_HORAS && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes ingresar las horas</p>}
        <input type="number" name="" id="select_text_input" min="0" defaultValue={currentLabor.lab_horas} onChange={handleInputChange} {...register("LAB_HORAS", { required: true })} />
        <button type="submit" id="create_update_button" >
          Confirmar cambios
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  )
}

export default UpdateLaborForm;