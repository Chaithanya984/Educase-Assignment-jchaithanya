import "./index.css";

const Profile = () => {
  return (
    <div className="profile-main-bg">
      <div className="profile-sub-bg">
        <div className="head-box-account">
          <h1 className="head-account-profile">Account Settings</h1>
        </div>
        <div className="profile-cont">
          <div className="profile-direction">
            <div className="profile-img">
              <img
                src="\images\Ellipse 114@2x.png"
                alt="profilepending"
                className="image-fix"
              />
              <img
                src="\images\Group 1585@2x.png"
                alt="checkgroup"
                className="group-icon"
              />
            </div>
            <div className="profile-details">
              <h1 className="usname-head">Marry Doe</h1>
              <p className="usemail-para">Marry@Gmail.Com</p>
            </div>
          </div>
        </div>
        <div className="para-cont-fix">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className="hr-cont">
          <hr />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Profile;
