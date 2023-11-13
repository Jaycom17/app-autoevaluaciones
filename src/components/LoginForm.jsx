import "./styles/LoginForm.css";

function LoginForm() {
  return (
    <body className="bodys">
      <div className="session">
        <div className="left">
          <svg
            enableBackground="new 0 0 300 302.5"
            version="1.1"
            viewBox="0 0 300 302.5"
          >
            <path href="https://upload.wikimedia.org/wikipedia/commons/5/57/Escudo_original_de_la_universidad_del_Cauca.jpg" />
          </svg>
        </div>
        <form action="" className="log-in" autoComplete="off">
          <h4>
            Nosotros somos <span>UNICAUCA</span>
          </h4>
          <p>Bienvenido de Vuelta! accede con tu cuenta </p>
          <div className="floating-label">
            <input
              placeholder="Correo"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
            />
            <label htmlFor="email">Correo:</label>
            <div className="icon">
              <svg
                enableBackground="new 0 0 100 100"
                version="1.1"
                viewBox="0 0 100 100"
              >
                <style type="text/css">
                  <div className="st0">fill:none</div>;
                </style>
                <g transform="translate(0 -952.36)">
                  <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                </g>
                <rect className="st0" width="100" height="100" />
              </svg>
            </div>
          </div>
          <div className="floating-label">
            <input
              placeholder="Contraseña"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
            />
            <label htmlFor="password">Contraseña:</label>
            <div className="icon">
              <svg
                enableBackground="new 0 0 24 24"
                version="1.1"
                viewBox="0 0 24 24"
              >
                <style type="text/css">
                  <div className="st0">fill:none</div>;
                  <div className="st1">fill:#010101</div>;
                </style>
                <rect className="st0" width="24" height="24" />
                <path className="st1" d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                <path
                  className="st1"
                  d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z"
                />
                <path
                  className="st1"
                  d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z"
                />
              </svg>
            </div>
          </div>
          <button type="submit" onClick="return false;">
            Log in
          </button>
          <a href="" className="discrete" target="_blank"></a>
        </form>
      </div>
    </body>
  );
}

export default LoginForm;
