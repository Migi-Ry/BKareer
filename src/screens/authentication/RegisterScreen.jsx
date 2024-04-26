import image from "../../assets/images/login.png";
import RegisterForm from "../../components/RegisterForm";

function Register() {
  return (
    <div className="flex-row">
      <RegisterForm />
      <div className="appName-block flex-col flex-items-center flex-content-center">
        <img src={image} className="img-login"/>
        <div className="appName-login">BKareer</div>
        <div className="app-slogan-txt">Ignite your future</div>
      </div>
    </div>
  );
}

export default Register;
