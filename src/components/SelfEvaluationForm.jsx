import { useEffect, useState } from "react";

import { getLabors } from "../api/labor.js";
import { getProfessors, getCordinator } from "../api/user.js";
import { getPeriods } from "../api/period.js";

import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import { createEvaluation } from "../api/evaluation.js";

import { useAuth } from "../context/AuthContext.jsx";

import "./styles/EvaluationItem.css";
import "./styles/EvaluationForm.css";

function SelfEvaluationForm() {

  const { actualRole } = useAuth();

  const [labors, setLabors] = useState([]);
  const [laborsOptions, setLaborsOptions] = useState([]);

  const [professorsOptions, setProfessorsOptions] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [periodsOptions, setPeriodsOptions] = useState([]);

  const [evaluations, setEvaluations] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    control,
  } = useForm();

  const newEvaluation = () => {
    if(!selectedProfessor){
      alert("Debe seleccionar un docente");
      return;
    }
    if (evaluations.length < labors.length) {
      setEvaluations([...evaluations, { id: evaluations.length + 1 }]);
    }
  };

  const removeEvaluation = () => {
    if (evaluations.length > 0) {
      setEvaluations(evaluations.slice(0, -1));
    }
  };

  const handleChangeProfessor = (e) => {
    setSelectedProfessor(e.value);
  };

  const handleChangePeriod = (e) => {
    setSelectedPeriod(e.value);
  };

  useEffect(() => {
    getLabors()
      .then((res) => {
        setLabors(res);

        const options = res.map((labor) => ({
          value: labor.lab_nombre,
          label: labor.lab_nombre,
        }));

        setLaborsOptions(options);
      })
      .catch((err) => {
        setLabors([]);
        console.log(err);
      });

    getProfessors()
      .then((res) => {
        const options = [];
        if (actualRole === "decano") {
          getCordinator()
            .then((coordinator) => {
              const cor = {
                value: coordinator.usr_identificacion,
                label: `Coordinador: ${coordinator.usu_nombre} ${coordinator.usu_apellido} - ${coordinator.usr_identificacion}`,
              };

              options.push(cor);
              res.forEach((professor) => {
                const option = {
                  value: professor.usr_identificacion,
                  label: `${professor.usu_nombre} ${professor.usu_apellido} - ${professor.usr_identificacion}`,
                };

                options.push(option);
              });

              setProfessorsOptions(options);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.forEach((professor) => {
            const option = {
              value: professor.usr_identificacion,
              label: `${professor.usu_nombre} ${professor.usu_apellido} - ${professor.usr_identificacion}`,
            };

            options.push(option);
          });

          setProfessorsOptions(options);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    getPeriods()
      .then((res) => {
        const options = res.map((period) => ({
          value: period.per_nombre,
          label: period.per_nombre,
        }));

        setPeriodsOptions(options);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="evaluation-item">
      <h1>Departamento de Sistemas</h1>
      <h2>
        Facultad de Ingenieria Electronica y Telecomunicaciones - Universidad
        Del Cauca
      </h2>
      <h2>Evaluación de actividades de labor docente</h2>

      <div id="information">
        <article id="data-professor">
          <Select
            name="usr_id"
            id="select-important-professor"
            options={professorsOptions}
            placeholder="Seleccione un docente"
            onChange={handleChangeProfessor}
          />

          <Select
            name="eva_period"
            id="select-important-period"
            options={periodsOptions}
            placeholder="Seleccione un periodo"
            onChange={handleChangePeriod}
          />
        </article>
      </div>

      <div id="control-buttons">
        <button onClick={newEvaluation} id="new-evaluation">
          Agregar Evaluación
        </button>
        <button onClick={removeEvaluation} id="delete-evaluation">
          quitar Evaluación
        </button>
      </div>

      <form
        id="form"
        onSubmit={handleSubmit((values) => {

          if (!selectedProfessor) {
            alert("Debe seleccionar un docente");
            return;
          }

          if (!selectedPeriod) {
            alert("Debe seleccionar un periodo");
            return;
          }

          const evaluations = Object.keys(values).reduce((result, key) => {
            const [field, index] = key.split(/(\d+)/).filter(Boolean);

            if (field && index !== undefined) {
              if (!result[index]) {
                result[index] = {};
              }

              if(!values[key]){setError(
                `eva_labor${index}`,
                { type: "required", message: "Debe seleccionar una labor" }
              ); return;}

              if(values[key].value){result[index][field] = values[key].value;}
              else{result[index][field] = values[key];}
              
            }

            return result;
          }, []);

          const valores = new Set();
          evaluations.forEach((item) => valores.add(item.eva_labor));

          if (valores.size !== evaluations.length) {
            alert("No puede haber labores repetidas");
            return;
          }

          if (evaluations.length === 0) {
            alert("Debe agregar al menos una evaluación");
            return;
          }

          let evaluation = { usr_id: selectedProfessor, eva_period: selectedPeriod, evaluations };

          createEvaluation(evaluation).then((res) => {
          if (res) {
            reset();
            document.getElementById("select-important-professor").value = "";
            document.getElementById("select-important-period").value = "";
            alert("Evaluación creada con éxito");
            setSelectedPeriod(null);
            setSelectedProfessor(null);
          } else {
            alert("Error al crear la evaluación");
          }}).catch((err) => {
            alert("Error al crear la evaluación");
          });
        })}
      >
        {evaluations.map((evaluation, i) => (
          <div key={evaluation.id} id="evaluation">
            <div id="div-form">
              <label id="labor-label">Labor: </label>

              <Controller
                control={control}
                name={`eva_labor${i}`}
                render={({ field }) => (
                  <Select
                  id="labor-select"
                    {...field}
                    options={laborsOptions}
                    onChange={(e)=> field.onChange(e)}
                    onBlur={(e)=> field.onBlur(field.value)}
                  />
                )}
              />

              <label id="labor-label">Estado</label>
              <select
                name="eva_state"
                id="labor-select"
                {...register(`eva_state${i}`, { required: true })}
                defaultValue=""
              >
                <option disabled hidden value="">
                  Seleccione un estado
                </option>
                <option value="0">En ejecución</option>
                <option value="1">Terminado</option>
              </select>
            </div>
            <div id="divisor"></div>
          </div>
        ))}

        {Object.keys(errors).length > 0 && (
          <span style={{ color: "red", fontSize: "smaller" }}>
            Debe llenar todos los campos
          </span>
        )}

        <section id="send">
          <button type="submit">Crear</button>
        </section>
      </form>
    </div>
  );
}

export default SelfEvaluationForm;
