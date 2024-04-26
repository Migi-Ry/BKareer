import image from "../../assets/images/login.png"
import LoginForm from "../../components/LoginForm";

function Login() {
  return (
    <div className="flex-row">
      <div className="appName-block flex-col flex-items-center flex-content-center">
        <img src={image} className="img-login"/>
        <div className="appName-login">BKareer</div>
        <div className="app-slogan-txt">Ignite your future</div>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
