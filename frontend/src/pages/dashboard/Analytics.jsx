import React from "react";
import styles from "./Analytics.module.css";

const Analytics = () => {
  return (
    <div>
      <div className={styles.h3tag}>
        <h3>Analytics overview</h3>
      </div>
      <div className={styles.maindiv}>
        <div>
          <div>
            <p>Video published</p>
            <i className="ml-auto material-icons circle-filled purple">
              videocam
            </i>
          </div>
          <p>0</p>
        </div>
        <div>
          <div>
            <p>Creation time spent</p>
            <i class="ml-auto material-icons circle-filled green">timelapse</i>
          </div>
          <p>Not enough data</p>
        </div>
        <div>
          <div>
            <p>Credits remaining in billing cycle</p>
            <i class="ml-auto material-icons circle-filled gold">
              workspace_premium
            </i>
          </div>
          <p>0</p>
        </div>
        <div>
          <div>
            <p>Team member video count</p>
          </div>
          <div>
            <p>Rohit Mahajan</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
