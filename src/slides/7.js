import React, { useEffect, useState } from "react";
import Layout from "./../Layout";
import "./7.css";

export default ({ action, isPaused }) => {
  useEffect(() => {
    setTimeout(() => {
      action("pause");
    }, 1000);
  }, []);
  return (
    <Layout>
      <div style={styles}>
        <h1>Animations are usually independent.</h1>
        <div>
          <p style={{ fontSize: "1.5em", margin: 0, marginTop: 100 }}>
            Loaders/Spinners
          </p>
          <p style={{ fontSize: "1.5em", marginTop: 10 }}>
            Something that you start, and then it runs on its own.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <div class="spinner1" />
            <div class="spinner2" />
          </div>
        </div>
        <h1 style={{ width: "60%", margin: "50px auto", fontSize: "2em" }}>
          But here, there's a lot of interdependence between user actions and
          the animation.
        </h1>
      </div>
    </Layout>
  );
};

const styles = {
  height: "100%",
  width: "100%",
  marginTop: 100,
  textAlign: "center"
};
