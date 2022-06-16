import React from "react";
import styles from "./BlogCard.module.css";
export const BlogCard = () => {
  return (
    <div>
      <h1 className={styles["blogCards-heading"]}>
        Tips and tricks for amplifying
        <br /> your brand with video
      </h1>
      <div className={styles.blogCards}>
        <div className={styles.singleCard}>
          <div>
            <img
              src="https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg"
              alt=""
            />
          </div>
          <div className={styles.aboutBlog}>
            <p>BLOG</p>
            <p className={styles.cardDescription}>
              Video Marketing:
              <br />
              How to Get Started
              <br />
              [Step by Step]
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p style={{ textAlign: "right", width: "90%", color: "#5846f6" }}>
              Read Story
            </p>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div>
            <img
              src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg"
              alt=""
            />
          </div>
          <div className={styles.aboutBlog}>
            <p>BLOG</p>
            <p className={styles.cardDescription}>
              How to Increase
              <br />
              Your Facebook Views
              <br />
              [Complete Guide]
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p style={{ textAlign: "right", width: "90%", color: "#5846f6" }}>
              Read Story
            </p>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div>
            <img
              src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg"
              alt=""
            />
          </div>
          <div className={styles.aboutBlog}>
            <p>BLOG</p>
            <p className={styles.cardDescription}>
              The Importance of
              <br />
              Video in Your
              <br />
              Content Stratergy
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p style={{ textAlign: "right", width: "90%", color: "#5846f6" }}>
              Read Story
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
