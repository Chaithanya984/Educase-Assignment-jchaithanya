import "./index.css";

const Landingpage = (props) => {
  const callngtolog = () => {
    const { history } = props;
    history.push("/login");
  };

  const callngtocreate = () => {
    const { history } = props;
    history.push("/signup");
  };

  return (
    <div className="main-bg-of-mobile">
      <div className="sub-mobile-bg">
        <div className="sub-login-create-box">
          <div className="head-box">
            <h1 className="style-head-land">Welcome to PopX</h1>
            <p className="style-para-land">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="but-cont">
            /* User clicks here to create a new account or log in with an
            existing account */
            <button className="landing-buttons" onClick={callngtocreate}>
              Created Account
            </button>
            <button className="landing-but" onClick={callngtolog}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
