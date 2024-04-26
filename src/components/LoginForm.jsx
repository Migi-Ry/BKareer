import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="form-block">
      <form className="" action="" method="post">
        <div className="login-title-txt flex-self-start">Đăng nhập</div>

        <div className="answer-form">
          <input className="input-field width-100" type="text" placeholder="Email/Số điện thoại" required/>
        </div>

        <div className="answer-form">
          <input className="input-field width-100" type="password" placeholder="Mật khẩu" required/>
        </div>

        {/* Remember Me - Forgot password */}
        <div className="flex-space-between">
          <label className="light-txt"><input className="login-checkbox" type="checkbox"/>Ghi nhớ đăng nhập</label>
          <a className="light-txt text-decor-none" href="#">Quên mật khẩu?</a>
        </div>

        {/* Login Button */}
        <input className="primary-btn margin-top-10 font-18 align-center width-100" type="submit" value="Đăng nhập" />

        {/* Register Now */}
        <div className="align-center width-fit-content font-18">
          <p>Chưa có tài khoản? <a className="text-decor-none" href="/register">Đăng ký ngay</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;