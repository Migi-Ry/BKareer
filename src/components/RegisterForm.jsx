function RegisterForm() {
  return (
    <div className="form-block flex-col test">
      <form action="">
        <div className="login-title-txt flex-self-start">Đăng ký</div>

        <div className="answer-form">
          <input className="input-field width-100" type="text" placeholder="Email/Số điện thoại" required/>
        </div>

        <div className="answer-form">
          <input className="input-field width-100" type="password" placeholder="Mật khẩu" required/>
        </div>

        <div className="flex-space-between">
          <label><input type="checkbox"/>Ghi nhớ mật khẩu</label>
          <div><Link className="" to="/">Quên mật khẩu?</Link></div>
        </div>

        {/* <Link className="align-center" to="/">Đăng ký</Link> */}
      </form>
    </div>
  );
}

export default RegisterForm;
