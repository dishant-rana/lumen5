import React from "react";
import styles from "./AllVideos.module.css";

const AllVideos = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className={styles.allvideos}>
        <div>
          <h2>All videos</h2>
          <div>{data.body.name[0]}</div>
        </div>
        <select>
          <option value="last_modified">Last Modified</option>
          <option value="last_created">Last created</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </div>
      <div className={styles.downdiv}>
        <p>+</p>
        <p>New video</p>
      </div>
    </div>
  );
};

export default AllVideos;
