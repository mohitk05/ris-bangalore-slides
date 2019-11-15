import React, { useEffect } from "react";
import Layout from "./../Layout";

export default ({ action }) => {
  useEffect(() => {
    setTimeout(() => {
      action("pause");
    }, 1000);
  }, []);
  return (
    <Layout>
      <div style={styles}>
        <h1>Animating using JavaScript</h1>
        <img
          src="js_1.png"
          alt="js1"
          style={{ width: "100%", marginTop: "10%" }}
        />
      </div>
    </Layout>
  );
};

const styles = {
  height: "100%",
  width: "60%",
  margin: "auto",
  textAlign: "center"
};
