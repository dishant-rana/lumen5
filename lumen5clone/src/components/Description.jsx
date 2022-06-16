import React from "react";
import styles from "./Description.module.css";
export const Description = () => {
  return (
    <>
      <div className={styles.descriptionContainer}>
        <div className={styles.imageContainer}>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png"
            alt=""
          />
        </div>
        <div className={styles.blogDescription}>
          <h1>
            Transform blog posts
            <br /> into videos with A.I.
          </h1>
          <p>
            Starting from a blank page is hard — and with Lumen5, you don’t have
            to. Our AI-powered technology helps you storyboard your ideas, fit
            your content to a layout, and find music and visuals that enhance
            your message.
          </p>
          <h4>Get started for free </h4>
          <hr />
          <h5>
            “Lumen5 has enabled us to create more videos
            <br /> and drive more traffic, while having more time to <br />
            invest in other projects.”
          </h5>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <img
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg"
                alt=""
              />
            </div>
            <div className={styles.authorInfo}>
              <strong>Drew Skykes,</strong>
              <span>Social Media Director</span>
              <img
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-nc-red.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.blogDescription}>
          <h1>
            Content Library with
            <br />
            millions of stock
            <br />
            photos & videos
          </h1>
          <p>
            The Lumen5 media library gives you easy access to millions of
            photos, video clips, and audio files, so you always have the
            elements you need to create the perfect video.
          </p>
          <h4>Get started for free </h4>
          <hr />
          <h5>
            “Lumen5 has enabled us to create more videos
            <br /> and drive more traffic, while having more time to <br />
            invest in other projects.”
          </h5>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <img
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-julia-o.jpg"
                alt=""
              />
            </div>
            <div className={styles.authorInfo}>
              <strong>Julia Olennikova,</strong>
              <span>Product Manager</span>
              <img
                style={{ width: "100px", height: "10px" }}
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-semrush.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            style={{ width: "560px" }}
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png"
            alt=""
          />
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.imageContainer}>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png"
            alt=""
          />
        </div>
        <div className={styles.blogDescription}>
          <h1>
            Making it easy to
            <br /> stay on brand
          </h1>
          <p>
            It has never been easier to stay on brand. With Lumen5 templates,
            you can customize each video with your unique logo, watermark,
            fonts, colors, and more.
          </p>
          <h4>Get started for free </h4>
          <hr />
          <h5>
            “Lumen5 has enabled us to create more videos
            <br /> and drive more traffic, while having more time to <br />
            invest in other projects.”
          </h5>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <img
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg"
                alt=""
              />
            </div>
            <div className={styles.authorInfo}>
              <strong>Pramod Sharma,</strong>
              <span>Actuary consultant</span>
              <img
                style={{ width: "100px", height: "16px" }}
                src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-taxevity-color.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
