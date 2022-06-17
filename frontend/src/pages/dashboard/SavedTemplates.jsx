import React from "react";
import styles from "./SavedTemplates.module.css";

const SavedTemplates = () => {
  return (
    <div>
      <div className={styles.savedtempup}>
        <h3>Saved templates</h3>
        <p>
          Customize one of our templates with your brand styling for easy reuse.
        </p>
      </div>
      <div className={styles.savedtempdown}>
        <div className={styles.saveddiv1}>
          <div>
            <i class="material-icons">add_circle</i>
            <p>New Saved Template</p>
          </div>
        </div>
        <div className={styles.saveddiv2}>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/brand-swatch.png"
            alt="temp"
          />
          <h3>You have no saved templates</h3>
          <p>
            Saved templates are packaged watermark, outro, and template settings
            you can apply to your videos.
          </p>
          <p>Add a new template and customize it to your brand.</p>
          <a href="https://help.lumen5.com/en/article/creating-and-using-saved-templates-wd9x8a/">
            Learn more about saved templates
          </a>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/drawn-arrow.png"
            alt="arr"
          />
        </div>
      </div>
    </div>
  );
};

export default SavedTemplates;
