import React from "react";
import styles from "./BrandKits.module.css";

const BrandKits = () => {
  return (
    <div>
      <div className={styles.brandskitup}>
        <h3>Brand kits</h3>
        <p>
          Create a custom brand kit to ensure your video always hits the right
          visual tone. Upload fonts, colors and a logo to any template.
        </p>
      </div>
      <div className={styles.brandskitdown}>
        <img
          src="https://storage.googleapis.com/lumen5-site-images/brand_kit_empty_state.png"
          alt="img"
        />
        <div>
          <h3>You currently have no brand kits.</h3>
          <div>
            <p>New brand kit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandKits;
