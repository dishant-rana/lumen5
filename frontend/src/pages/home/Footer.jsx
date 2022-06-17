import React from "react";
import styles from "./Footer.module.css";
import { Link, useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.blueBanner}>
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
          <div className={styles.bannerButton}>
            <button
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer" }}
            >
              Sign up free
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles["logo-box"]}>
          <Link to="/">
            {" "}
            <img
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png"
              alt=""
            />
          </Link>
          <p>
            Lumen5 combines powerful A.I. with a simple drag-and-drop interface
            to help you create professional video content in minutes.
          </p>
        </div>
        <div className={styles["footer-links"]}>
          <ul>
            <li className={styles["top-upper"]}>EXPLORE</li>
            <li>About</li>
            <li>Features</li>
            <li>Careers</li>
            <li>LinkedIn</li>
            <li>Support</li>
            <li>Community Group</li>
          </ul>
        </div>
        <div className={`${styles["footer-links"]} ${styles.deactive}`}>
          <ul>
            <li className={styles["top-upper"]}>VIDEO TOOLS</li>
            <li>Add Text to Video</li>
            <li>Cut Video</li>
            <li>Merge Video</li>
            <li>Compress Video</li>
            <li>Resize Video</li>
            <li>See all</li>
          </ul>
        </div>
        <div className={`${styles["footer-links"]} ${styles.deactive}`}>
          <ul>
            <li className={styles["top-upper"]}>VIDEO CREATORS</li>
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
