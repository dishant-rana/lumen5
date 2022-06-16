import React from "react";
import styles from "./LogoutMenu.module.css";

const LogoutMenu = ({ data }) => {
  return (
    <div className={styles.maindiv}>
      <div>
        <div>
          <div>{data.body.name[0]}</div>
          <div className={styles.namediv}>
            <p>{data.body.name}</p>
            <p>{data.body.email}</p>
          </div>
        </div>
        <div>
          <i class="icon-left material-icons">ondemand_video</i>
          <p>All videos</p>
        </div>
      </div>
      <div>
        <div>
          <i class="icon-left material-icons">work</i>
          <p>Workspaces</p>
        </div>
        <div>
          <i class="icon-left material-icons">people_alt</i>
          <p>Team members</p>
        </div>
        <div>
          <i class="icon-left material-icons">credit_card</i>
          <p>Billing</p>
        </div>
        <div>
          <i class="icon-left material-icons">settings</i>
          <p>Account settings</p>
        </div>
      </div>
      <div>
        <div>
          <i class="icon-left material-icons">school</i>
          <p>Learning hub</p>
        </div>
        <div>
          <i class="icon-left material-icons">help</i>
          <p>Help center</p>
        </div>
        <div>
          <i class="icon-left material-icons">exit_to_app</i>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutMenu;
