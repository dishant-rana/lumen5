import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
export const Header = () => {
  return (
    <>
      <div className="MenuBarToggle">
        <Link to="/">
          <img
            className="SvgLogo"
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"
            alt=""
          />
        </Link>
        <label id="Menulabel" htmlFor="toggle">
          &#9776;
        </label>
        <input type="checkbox" id="toggle" />
        <div className="menuBar">
          <select name="create" id="navselect" className="navref">
            <option
              value=""
              hidden
              style={{ textAlign: "right", color: "#48505e" }}
            >
              Create
            </option>
            <option value="">Photo Video Maker </option>
            <option value="">Facebook Video Maker</option>
            <option value="">Youtube Intro Maker</option>
            <option value="">Instagram Video Maker</option>
            <option value="">Instagram Story Maker</option>
            <option value="">Promo Video Maker</option>
            <option value="">Video Ad Maker</option>
            <option value="">Marketing Video Maker</option>
            <option value="">Linkdin Video Maker</option>
            <option value="">Business Video Maker</option>
            <option value="">Ecommerce Video Maker</option>
            <option value="">Explainer video Maker</option>
            <option value="">Slideshow video Maker</option>
            <option value="">Education video Maker</option>
            <option value="">Infography Video maker</option>
            <option value="">Video Editor</option>
            <option value="">Voice Over</option>
          </select>
          <Link to="/pricing">Pricing</Link>
          <Link to="/enterprice">Enterprise</Link>
          <Link to="/case_studies">Case studies</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/signin">
            <button className="pointer1 LogInButton">Login</button>
          </Link>
          <Link to="/signup">
            <span>
              <button className="pointer1 SignButton">Sign up</button>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
