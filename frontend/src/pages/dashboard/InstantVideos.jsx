import React from "react";
import styles from "./InstantVideos.module.css";
const InstantVideos = () => {
  return (
    <>
      <div className={styles.upperbar}>
        <div className={styles.leftside}>
          <h3>Instant videos</h3>
          <p>
            These are intelligently crafted videos based on your blog posts.
          </p>
        </div>
        <div className={styles.managefeeds}>
          <p>Manage feeds</p>
        </div>
      </div>
      <div className={styles.downbar}>
        <div className={styles.leftdownbar}>
          <p>
            You don't have any Instant Videos right now. Add a feed to get
            started.
          </p>
        </div>
        <div className={styles.rightdownbar}>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/drawn-arrow.png"
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
};

export default InstantVideos;
