import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../context/AuthContext.jsx";

import "./styles/AcademicPeriod_LaborForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const { singin, isAuthenticated, haveError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div id="log-in-form">
      <div id="form_container">
        <form
          id="form_create_update"
          onSubmit={handleSubmit((values) => {
            singin(values);
          })}
        >
          <h1>Inicia Sesión</h1>

          {haveError && <p style={{ color: 'red', fontSize: 'smaller' }}>{haveError.message}</p>}

          <label>Email</label>
          <input
            type="email"
            id="select_text_input"
            {...register("usu_email", { required: true })}
          />
          {errors.usu_email && <p style={{ color: 'red', fontSize: 'smaller' }}>debe ingresar el email</p>}
          <label>Contraseña</label>
          <input
            type={showPassword ? "text" : "password"}
            id="select_text_input"
            {...register("usu_contrasena", { required: true })}
          />
          
          {errors.usu_contrasena && <p style={{ color: 'red', fontSize: 'smaller' }}>debe ingresar la contraseña</p>}
          
          <div id="show_password_container">
            <input
              type="checkbox"
              id="show_password_checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show_password_checkbox">Mostrar Contraseña</label>
            </div>


          <button type="submit" id="create_update_button">
            Iniciar Sesión
          </button>
        </form>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/Logo_de_la_Universidad_del_Cauca.svg"
          alt=""
          id="img_uni"
        />
      </div>
    </div>
  );
}

export default LoginForm;
