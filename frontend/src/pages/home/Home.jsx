import React from "react";
import "./Style.css";
export const Home = () => {
  return (
    <div>
      <div className="lumen_intro background_gray">
        <div className="inner_first">
          <h3 className="heading">
            Video maker built to supercharge your content strategy
          </h3>
          <p className="description">
            Easily make videos for
            <br />
            <b>
              content marketing,
              <br />
              thought leadership, and
              <br /> brand awareness{" "}
            </b>
            in a snap.
          </p>
          <button
            className="sign_up_button pointer1"
            style={{ outline: "none", border: "none" }}
          >
            Sign up free
          </button>
        </div>
        <div className="imgContainer">
          <img
            height="510"
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png"
            alt=""
          />
          <div className="center">
            <i className="fa-solid fa-circle-play"></i>
          </div>
        </div>
      </div>

      <div className="partners">
        <p>Over 6 million videos created by thousands of businesses</p>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
