import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Payment.module.css";

const spinnerStyle = {
  fontSize: "100px",
  textAlign: "center",
  color: "gray"
};

const PaymentSuccess = () => {
  const [delay, setDelay] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let id = setTimeout(() => {
      return setDelay(false);
    }, 2000);

    //cleanup
    return () => clearInterval(id);
  }, []);

  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      {delay ? (
        <>
          <p style={{ textAlign: "center", marginTop: "70px" }}>
            <i className="fa fa-spinner w3-spin" style={spinnerStyle}></i>
          </p>
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
          <p style={{ textAlign: "center" }}>
            Please wait your payment is processing
          </p>
        </>
      ) : (
        <div
          className={`${style.paySuccss} w3-container w3-center w3-animate-opacity`}
        >
          <img
            className={style.paySuccss}
            src="https://colombocme.org/wp-content/uploads/2019/03/Paymentsuccessful21.png"
            alt="error loading image"
          />

          <button className={style.btnSuccess} onClick={handleClick}>
            Back to Dashboard
          </button>
        </div>
      )}
    </>
  );
};

export { PaymentSuccess };
