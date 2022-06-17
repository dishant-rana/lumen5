import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import facebook from "../../assets/facebook.png";

const db = [
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png",
  "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png"
];

const isLower = (str) => {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      // small letter
      return true;
    }
  }
  return false;
};

const isUpper = (str) => {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      // big letter
      return true;
    }
  }
  return false;
};

const isMin8 = (str) => {
  return str.length >= 8;
};

const symbolChecker = (str) => {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (
      code === 33 ||
      (code >= 35 && code <= 38) ||
      (code >= 40 && code <= 47) ||
      (code >= 58 && code <= 64) ||
      (code >= 91 && code <= 95) ||
      (code >= 123 && code <= 126)
    ) {
      //special char and symbols
      return true;
    }
  }
  return false;
};

const digitChecker = (str) => {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 48 && code <= 57) {
      return true;
    }
  }
  return false;
};

const isNumOrSym = (str) => {
  if (symbolChecker(str)) {
    return true;
  }
  if (digitChecker(str)) {
    return true;
  }

  return false;
};

export const SignUp = () => {
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [min8, setMin8] = useState(false);
  const [numOrSym, setNumOrSym] = useState(false);
  const passwordChecker = (str) => {
    let ans = null;
    ans = isLower(str);
    setLower(ans);

    ans = isUpper(str);
    setUpper(ans);

    ans = isMin8(str);
    setMin8(ans);

    ans = isNumOrSym(str);
    setNumOrSym(ans);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleType, setToggleType] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name === "" || email === "" || password === "") {
      return alert("One or more input fields are empty");
    }
    if (!lower || !upper || !min8 || !numOrSym) {
      return alert("Password does not satisfied the given criteria");
    }
    document.title = "Loading...";
    const payload = {
      name,
      email,
      password
    };
    fetch("https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/user/add", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((data) => {
        document.title =
          "Lumen5 - Video Maker | Create Videos Online in Minutes";
        navigate("/signin");
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
        <div className={styles.heading}>Get started with a free account</div>

        <div className={styles.formData}>
          <div>FULL NAME</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <div>WORK EMAIL</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
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
            onChange={(e) => {
              setPassword(e.target.value);
              passwordChecker(e.target.value);
            }}
            type={toggleType ? "text" : "password"}
          />
        </div>

        <div className={styles.afterPassword}>
          <div>
            {lower ? (
              <div style={{ textDecoration: "line-through" }}>
                <span>•</span> One lowercase character
              </div>
            ) : (
              <div>
                <span>•</span> One lowercase character
              </div>
            )}
            {upper ? (
              <div style={{ textDecoration: "line-through" }}>
                <span>•</span> One uppercase character
              </div>
            ) : (
              <div>
                <span>•</span> One uppercase character
              </div>
            )}
          </div>
          <div>
            {min8 ? (
              <div style={{ textDecoration: "line-through" }}>
                <span>•</span> 8 characters minimum
              </div>
            ) : (
              <div>
                <span>•</span> 8 characters minimum
              </div>
            )}
            {numOrSym ? (
              <div style={{ textDecoration: "line-through" }}>
                <span>•</span> Contains a number or symbol
              </div>
            ) : (
              <div>
                <span>•</span> Contains a number or symbol
              </div>
            )}
          </div>
        </div>

        <div>
          <button className={styles.handleSignUp} onClick={handleSignUp}>
            Create account
          </button>

          <div className={styles.hrDivision}>
            <hr></hr>
            <div>OR</div>
            <hr></hr>
          </div>

          <button
            onClick={() => {
              window.open("https://www.facebook.com/", "_blank");
            }}
            className={styles.button2}
          >
            <img className={styles.insideButton} src={facebook} alt="" />
            <span>Sign up with Facebook</span>
          </button>
        </div>

        <div className={styles.bottomLines}>
          Already have a Lumen5 account? <Link to="/signin">Log in</Link>
        </div>

        <div className={styles.conclusionLine}>
          By clicking “Create account” I agree to Lumen5’s{" "}
          <a href="https://lumen5.com/terms/" target="_blank" rel="noreferrer">
            Terms of Use
          </a>{" "}
          and{" "}
          <a
            href="https://lumen5.com/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </>
  );
};
