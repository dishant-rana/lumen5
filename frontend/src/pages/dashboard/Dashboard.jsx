import React, { useState, useEffect } from "react";
import AllVideos from "./AllVideos";
import InstantVideos from "./InstantVideos";
import styles from "./Dashboard.module.css";
import BrandKits from "./BrandKits";
import SavedTemplates from "./SavedTemplates";
import Analytics from "./Analytics";
import LogoutMenu from "./LogoutMenu";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [allvideos, setAllVideos] = useState(true);
  const [instantvideos, setInstantvideos] = useState(false);
  const [brandkits, setBrandkits] = useState(false);
  const [savedtemplates, setSavedTemplates] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [logoutmenu, setLogoutMenu] = useState(false);

  let token = localStorage.getItem("token");

  const [data, setData] = useState({ body: { name: "" } });

  useEffect(() => {
    fetch(
      "https://huzaifa-14-06-2022-lumen5-be.herokuapp.com/user/tokenCheck",
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          token: token
        })
      }
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setData({ ...data });
      });
  }, []);

  const handleAllVideos = () => {
    setAllVideos(true);
    setInstantvideos(false);
    setBrandkits(false);
    setSavedTemplates(false);
    setAnalytics(false);
  };

  const handleInstantVideos = () => {
    setAllVideos(false);
    setInstantvideos(true);
    setBrandkits(false);
    setSavedTemplates(false);
    setAnalytics(false);
  };
  const handleBrandKits = () => {
    setAllVideos(false);
    setInstantvideos(false);
    setBrandkits(true);
    setSavedTemplates(false);
    setAnalytics(false);
  };
  const handleSavedTemplates = () => {
    setAllVideos(false);
    setInstantvideos(false);
    setBrandkits(false);
    setSavedTemplates(true);
    setAnalytics(false);
  };

  const handleAnalytics = () => {
    setAllVideos(false);
    setInstantvideos(false);
    setBrandkits(false);
    setSavedTemplates(false);
    setAnalytics(true);
  };

  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles.topbar}>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
            alt="lumen"
          />
        </div>
        <div className={styles.rightbar}>
          <div className={styles.inputbar}>
            <i className="material-icons">search</i>
            <input type="text" placeholder="Search your videos" />
          </div>
          <div className={styles.upgrade}>
            <p onClick={() => navigate("/pricing")}>UPGRADE</p>
          </div>
          <div
            className={styles.menubar}
            onClick={() => setLogoutMenu(!logoutmenu)}
          >
            {data.body.name[0]}
          </div>
          <div className={styles.logoutbar}>
            {logoutmenu ? <LogoutMenu data={data} /> : null}
          </div>
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.leftdiv}>
          <div>
            <div
              className={allvideos ? `${styles.active}` : ""}
              onClick={handleAllVideos}
            >
              <i className="material-icons">ondemand_video</i>
              <p>All videos</p>
            </div>
            <div
              className={instantvideos ? `${styles.active}` : ""}
              onClick={handleInstantVideos}
            >
              <i className="material-icons">movie_filter</i>
              <p>Instant videos</p>
            </div>
            <div
              className={brandkits ? `${styles.active}` : ""}
              onClick={handleBrandKits}
            >
              <i className="material-icons">palette</i>
              <p>Brand kits</p>
            </div>
            <div
              className={savedtemplates ? `${styles.active}` : ""}
              onClick={handleSavedTemplates}
            >
              <i className="material-icons">featured_video</i>
              <p>Saved templates</p>
            </div>
            <div
              className={analytics ? `${styles.active}` : ""}
              onClick={handleAnalytics}
            >
              <i className="material-icons">bar_chart</i>
              <p>Analytics</p>
            </div>
          </div>
          <div className={styles.project}>
            <p>Projects</p>
            <div>+ Add</div>
          </div>
        </div>
        <div className={styles.rightdiv}>
          <div>{allvideos ? <AllVideos data={data} /> : null}</div>
          <div>{instantvideos ? <InstantVideos /> : null}</div>
          <div>{brandkits ? <BrandKits /> : null}</div>
          <div>{savedtemplates ? <SavedTemplates /> : null}</div>
          <div>{analytics ? <Analytics /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
