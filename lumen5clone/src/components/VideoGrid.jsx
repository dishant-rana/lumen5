import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./VideoGrid.module.css";
export const VideoGrid = () => {
  const [videosData, setVideosData] = useState([]);
  const playVideo = (e) => {
    e.target.play();
  };
  const stopVideo = (e) => {
    e.target.pause();
  };
  const getVideos = async () => {
    let res = await fetch(
      "https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/template"
    );
    let data = await res.json();
    setVideosData([...data]);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <>
      {/* EMpty DIV to Make SPACE */}
      <div
        style={{
          height: "100px",
          width: "100%",
        }}
      ></div>
      <div className={styles.videoGrid}>
        <h1>Captivating video templates</h1>
        <p>Drag and drop. No experience required.</p>
        <div className={styles.displayVideos}>
          {videosData.map((el, index) => {
            return (
              <video
                muted="muted"
                key={index}
                className={styles.promVideos}
                loop
                onMouseOver={(e) => playVideo(e)}
                onMouseOut={(e) => stopVideo(e)}
              >
                <source src={el.src} type="video/mp4"></source>
              </video>
            );
          })}
        </div>
      </div>
    </>
  );
};
