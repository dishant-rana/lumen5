import React from "react";
import videoStyle from "./VideoGrid.module.css";
import styles from "./ExploreVideos.module.css";
import { useState } from "react";

const url = [
  "https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/content_marketing",
  "https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/communications",
  "https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/promotional",
  "https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/people_&_culture",
  "https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/resources/get/localization",
];

export const ExploreVideos = () => {
  const [videosData, setVideosData] = useState([]);
  const getData = async (URL) => {
    try {
      let res = await fetch(URL);
      let data = await res.json();
      setVideosData([...data]);
    } catch (e) {
      console.log("Error");
      console.log(e);
    }
  };

  const playVideo = (e) => {
    e.target.play();
  };
  const stopVideo = (e) => {
    e.target.pause();
  };
  React.useEffect(() => {
    getData(url[0]);
  }, []);

  return (
    <>
      <div
        style={{
          height: "200px",
          width: "100%",
        }}
      ></div>
      <div className={videoStyle.videoGrid}>
        <h1>Explore videos made with Lumen5</h1>
        <div className={styles.categoryButton}>
          <button style={{ width: "200px" }} onClick={() => getData(url[0])}>
            Content Marketing
          </button>
          <button onClick={() => getData(url[1])}>Communications</button>
          <button onClick={() => getData(url[2])}>Promotional</button>
          <button onClick={() => getData(url[3])}>People & Culture</button>
          <button onClick={() => getData(url[4])}>Localization</button>
        </div>
        <div className={styles.categoryGrid}>
          {videosData.map((el) => {
            return (
              <video
                key={el._id}
                muted="muted"
                className={styles.singleVideo}
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
