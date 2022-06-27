import "../Login/login.css";

export default function Register() {
  return (
    <div className="container-login">
      <div className="login">
        <div className="card-body login-body">
          <div className="title">
            <h4 className="title-login text-center">Registro</h4>
          </div>
          <br />
          <form noValidate>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Correo Electrónico"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              ></input>
            </div>

            <div className="text-end">Volver al Login</div>

            <div className="mt-3 d-grid gap-2 col-12 mx-auto">
              <button className="rounded-pill btn btn-primary" type="button">
                Iniciar
              </button>
            </div>

            <div className="box">
              <div className="login-circles">
                <button
                  id="blue"
                  type="button"
                  className="btn btn-primary btn-circle btn-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="custom-facebook-icon"
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    />
                  </svg>
                </button>
                <button
                  id="red"
                  type="button"
                  className="btn btn-danger btn-circle btn-sm "
                >
                  <i id="custom-google-icon" className="bi bi-google"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
