import React, { useEffect } from "react";
import Layout from "./../Layout";

export default ({ action, isPaused }) => {
  useEffect(() => {
    setTimeout(() => {
      action("pause");
    }, 1000);
  }, []);
  return (
    <Layout>
      <div style={styles}>
        <h1>Hello, Bengaluru!</h1>
        <p style={{ fontSize: 30 }}>shorturl.at/CDKY5</p>
      </div>
    </Layout>
  );
};

const styles = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
};
