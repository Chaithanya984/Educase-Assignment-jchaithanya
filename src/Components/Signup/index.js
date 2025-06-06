import "./index.css";

const Signup = (props) => {
  const calltoprofilepage = () => {
    const { history } = props;
    history.push("/profile");
  };

  return (
    <div className="sign-in-main-bg">
      <div className="sign-in-sub-bg">
        <h1 className="sigin-heading">Create your PopX account</h1>
        <div className="form-signin">
          <div className="form-signin-input-one">
            <label className="input-label" htmlFor="namesid">
              Full Name<span className="span-fix">*</span>
            </label>
            <input
              className="input-text"
              type="email"
              placeholder="Enter email address"
              id="namesid"
            />
          </div>
          <div className="form-signin-input-one">
            <label className="input-label" htmlFor="phnid">
              Phone number<span className="span-fix">*</span>
            </label>
            <input
              className="input-text"
              type="text"
              placeholder="Enter Phone number"
              id="phnid"
            />
          </div>
          <div className="form-signin-input-one">
            <label className="input-label" htmlFor="emailsid">
              Email address<span className="span-fix">*</span>
            </label>
            <input
              className="input-text"
              type="email"
              placeholder="Enter email address"
              id="emailsid"
            />
          </div>
          <div className="form-signin-input-one">
            <label className="input-label" htmlFor="passwordids">
              Password<span className="span-fix">*</span>
            </label>
            <input
              className="input-text"
              type="password"
              placeholder="Enter password"
              id="passwordids"
            />
          </div>
          <div className="form-signin-input-one">
            <label className="input-label" htmlFor="namecompid">
              Company name<span className="span-fix">*</span>
            </label>
            <input
              className="input-text"
              type="text"
              placeholder="Enter company name"
              id="namecompid"
            />
          </div>

          <div>
            <h2 className="head-agency">
              Are you an Agency?<span className="span-fix">*</span>
            </h2>
            <div className="make-row-radio">
              <div className="fixing-position-radio">
                <input
                  id="yesid"
                  className="inp-radio"
                  type="radio"
                  value="Yes"
                  name="selecting"
                />
                <label htmlFor="yesid" className="inp-radio-label">
                  Yes
                </label>
              </div>
              <div className="fixing-position-radio">
                <input
                  id="noid"
                  className="inp-radio"
                  type="radio"
                  value="No"
                  name="selecting"
                />
                <label htmlFor="noid" className="inp-radio-label">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="but-cont-radio">
          <button className="but-radio-but" onClick={calltoprofilepage}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
