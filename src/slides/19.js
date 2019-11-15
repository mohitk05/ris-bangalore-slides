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
        <h1>Incrementing</h1>
        <img src="js_2.png" alt="js2" style={{ width: "100%" }} />
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
