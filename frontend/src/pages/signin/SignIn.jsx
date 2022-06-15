import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";

const db = [
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png"
];

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ifIncorrect, setIfIncorrect] = useState(false);
  const [toggleType, setToggleType] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    document.title = "Loading...";
    const payload = {
      email,
      password
    };
    fetch("https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "user not found") {
          document.title =
            "Lumen5 - Video Maker | Create Videos Online in Minutes";
          setIfIncorrect(true);
        } else {
          document.title =
            "Lumen5 - Video Maker | Create Videos Online in Minutes";
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        }
      });
  };

  return (
    <>
      <div className={styles.sidenav}>
        <div>
          <img
            width="140px"
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
            alt=""
          />
        </div>

        <div className={styles.sidenavHeading}>
          Supercharge your content strategy
        </div>

        <div className={styles.sidenavPara}>Join 800,000+ brands creating</div>
        <div className={styles.sidenavPara}>videos with Lumen5</div>

        <div className={styles.sidenavGrid}>
          {db.map((el, idx) => {
            return (
              <div key={idx}>
                <img width="85px" src={el} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.afterSidenav}>
        <div className={styles.heading}>Welcome back!</div>

        <div className={styles.formData}>
          <div>WORK EMAIL</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="text"
          />
          {ifIncorrect ? (
            <div style={{ color: "red" }}>
              Your email or password was incorrect
            </div>
          ) : (
            ""
          )}
          <div className={styles.passwordDivision}>
            <div>PASSWORD</div>
            <div
              className={styles.passwordEye}
              onClick={() => setToggleType(toggleType ? false : true)}
            >
              <div>
                {toggleType ? (
                  <span className="material-symbols-outlined">
                    visibility_off
                  </span>
                ) : (
                  <span className="material-symbols-outlined">visibility</span>
                )}
              </div>
              <div>{toggleType ? "Hide" : "Show"}</div>
            </div>
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={toggleType ? "text" : "password"}
          />
        </div>

        <div className={styles.forgetPassword}>Forgot password?</div>
        <div>
          <button className={styles.handleSignUp} onClick={handleLogin}>
            Login
          </button>

          <div className={styles.hrDivision}>
            <hr></hr>
            <div>OR</div>
            <hr></hr>
          </div>

          <div>
            <button className={styles.button2}>Login with Facebook</button>
          </div>
          <div>
            <button className={styles.button3}>Login via SSO</button>
          </div>
        </div>

        <div className={styles.createAccountLine}>
          Need a Lumen5 account? <a href="/signup">Create an account</a>
        </div>

        <div className={styles.lastLine}>© 2022 Lumen5</div>
      </div>
    </>
  );
};
