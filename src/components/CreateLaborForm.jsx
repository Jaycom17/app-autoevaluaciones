import { useForm } from "react-hook-form";

import { createLabor, getLaborTypes, getLaborMinMaxHours } from "../api/labor.js";

import { useEffect, useState } from "react";

import "./styles/AcademicPeriod_LaborForm.css";

function CreateLaborForm() {

  const[LaborType, setLaborType] = useState([]);

  const[selectedLT, setSelectedLT] = useState('');

  const[minHours, setMinHours] = useState();
  const[maxHours, setMaxHours] = useState();

  useEffect(() => {
    getLaborTypes().then((res) => {
      setLaborType(res);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedLT(selectedOption);
    console.log(selectedLT);
    try {
      getLaborMinMaxHours(selectedOption).then((res) => {
        setMinHours(res.tl_min_horas);
        setMaxHours(res.tl_max_horas);
      })
    } catch (err) {
      console.log(err);
    }
  }

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
        console.log(await response);
        alert(response.message);
        if (response.status !== 'error') {
          reset();
        }
      })}>
        <h1>Crear labor</h1>
        <label>Tipo de labor</label>
        {errors.tl_descripcion && <p style={{ color: 'red', fontSize: 'smaller' }}>Debe seleccionar un tipo</p>}
        <select name="TipoL" id="select_text_input" {...register("tl_descripcion", { required: true, onChange: handleSelectChange })} >
          <option disabled hidden selected></option>
          {LaborType.map((tipo, i) => (
            <option key={i}>{tipo.tl_descripcion}</option>
          ))}
        </select>
        <label>Nombre de labor</label>
        {errors.lab_nombre && <p style={{ color: 'red', fontSize: 'smaller' }}>Debe ingresar el nombre</p>}
        <input type="text" name="" id="select_text_input" {...register("lab_nombre", { required: true })} />
        <label>Horas asignadas</label>
        {errors.lab_horas && <p style={{ color: 'red', fontSize: 'smaller' }}> {errors.lab_horas.type === 'required' ? 'Debe ingresar las horas' : ''}</p>}
        <input type="number" name="" id="select_text_input" min={minHours} max={maxHours} {...register("lab_horas", { required: true, })} />
        <button type="submit" id="create_update_button">
          Crear labor
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  );
}

export default CreateLaborForm;