import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <div className="blueBanner">
        <div>
          <h1>
            Join 800,000+ companies that are using Lumen5 to tell their stories.
          </h1>
          <div>
            <p>
              Lumen5 is a video creation software that helps marketers,
              publishers, and brands create video content in a breeze, without
              any technical expertise.
            </p>
          </div>
          <div className="bannerButton">
            <button>Sign up free</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="logo-box">
          <a href="home.html">
            {" "}
            <img src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png" />
          </a>
          <p>
            Lumen5 combines powerful A.I. with a simple drag-and-drop interface
            to help you create professional video content in minutes.
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li className="top-upper">EXPLORE</li>
            <li>About</li>
            <li>Features</li>
            <li>Careers</li>
            <li>LinkedIn</li>
            <li>Support</li>
            <li>Community Group</li>
          </ul>
        </div>
        <div className="footer-links deactive">
          <ul>
            <li className="top-upper">VIDEO TOOLS</li>
            <li>Add Text to Video</li>
            <li>Cut Video</li>
            <li>Merge Video</li>
            <li>Compress Video</li>
            <li>Resize Video</li>
            <li>See all</li>
          </ul>
        </div>
        <div className="footer-links deactive">
          <ul>
            <li className="top-upper">VIDEO CREATORS</li>
            <li>Video Editor</li>
            <li>Photo Video Maker</li>
            <li>Facebook Video Maker</li>
            <li>Youtube Video Maker</li>
            <li>Instagram Video Maker</li>
            <li>See all</li>
          </ul>
        </div>
      </div>
    </>
  );
};
