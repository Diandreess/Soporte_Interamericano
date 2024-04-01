import './Style/CardIniciarSesion.css'
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';

const clientID = "513817694226-3ldfht4vv0re98ku51s5lmk8r9c605mp.apps.googleusercontent.com"
const onSuccess = (response) => {
  location.href = "./Principal.html";
}

const onFailure = (response) => {
  console.table(response);
  console.log("Something went wrong ");
}

export const CardLogin = () => {
  return (
    <div className="ContainerLogin d-flex justify-content-center align-items-center">
      <div className="card bgCardLogin">
        <h1 className="card-tittle text-center text-light"> Login</h1>
        <hr></hr>
        <div className="card-body">
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Continue  with Google"
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  )

}