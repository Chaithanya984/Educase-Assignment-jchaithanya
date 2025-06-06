import "./index.css";

const Login = (props) => {
  const calltoprofile = () => {
    const { history } = props;
    history.push("/profile");
  };
  return (
    <div className="log-main-bg">
      <div className="log-sub-bg">
        <h1 className="sign-head">Signin to your PopX account</h1>
        <p className="sign-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="form-cont">
          <div className="form-input-one">
            <label className="log-label-box" htmlFor="emailid">
              Email Address
            </label>
            <input
              className="log-input-box"
              type="email"
              placeholder="Enter email address"
              id="emailid"
            />
          </div>
          <div className="form-input-one">
            <label className="log-label-box" htmlFor="passwordid">
              Password
            </label>
            <input
              className="log-input-box"
              type="password"
              placeholder="Enter password"
              id="passwordid"
            />
          </div>

          <button className="Log-but" onClick={calltoprofile}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
