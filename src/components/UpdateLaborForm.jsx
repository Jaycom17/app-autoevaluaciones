import { useForm  } from "react-hook-form";

import { getLaborById, updateLabor, getLaborTypes, getLaborMinMaxHours } from "../api/labor.js";

import "./styles/AcademicPeriod_LaborForm.css";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


function UpdateLaborForm() {

  const [currentLabor, setCurrentLabor] = useState({});

  const[currentLaborType, setCurrentLaborType] = useState([]);

  const[selectedLT, setSelectedLT] = useState('');

  const[minHours, setMinHours] = useState(0);
  const[maxHours, setMaxHours] = useState(0);

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
      setCurrentLabor(res);
      reset({
        tl_descripcion:res.tl_descripcion,
        lab_nombre:res.lab_nombre,
        lab_horas:res.lab_horas,
      });
      getLaborMinMaxHours(res.tl_descripcion).then((res) => {
        setMinHours(res.tl_min_horas);
        setMaxHours(res.tl_max_horas);
      })
    }).catch((err) => {
      console.log(err);
    });

    getLaborTypes().then((res) => {
      const laborArr = Object.values(res)
      setCurrentLaborType(laborArr);
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

  return (
    <div id="form_container">
      <form id="form_create_update" onSubmit={handleSubmit (async (values) => {
        
        const response = await updateLabor(id, values);
        if (response) {
          alert("Labor actualizada con éxito");
          navigate("/labor",{replace:true});
          reset();
        } else {
          alert("Error al actualizar la labor");
        }
      })}>
        <h1>Actualizar labor</h1>
        <label>Tipo de labor</label>
        {errors.tl_descripcion && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes seleccionar un tipo de labor</p>}
        <select name="TipoL" id="select_text_input" {...register("tl_descipcion", { required: true, onChange: handleSelectChange })}>
          {currentLaborType.map((tipo, i) => (
            tipo === currentLabor.tl_descripcion ? <option key={i} value={tipo.tl_descripcion} selected>{tipo.tl_descripcion}</option> : <option key={i} value={tipo.tl_descripcion}>{tipo.tl_descripcion}</option>
          ))}
        </select>
        <label>Nombre de labor</label>
        {errors.lab_nombre && <p style={{ color: 'red', fontSize: 'smaller' }}>Debes ingresar el nombre</p>}

        <input
          type="text"
          name="lab_nombre"
          id="select_text_input"
          {...register("lab_nombre", { required: true })}
        />
        
        <label>Horas asignadas</label>
        {errors.lab_horas && <p style={{ color: 'red', fontSize: 'smaller' }}> {errors.lab_horas.type === 'required' ? 'Debe ingresar las horas' : ''}</p>}
        <input type="number" name="" id="select_text_input" min={minHours} max={maxHours} {...register("lab_horas", { required: true, })} />
        <button type="submit" id="create_update_button">
          Confirmar cambios
        </button>
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg" alt="" id="img_uni"/>
    </div>
  )
}

export default UpdateLaborForm;