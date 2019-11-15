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
        <h1>Wrapping up 👋</h1>
      </div>
    </Layout>
  );
};

const styles = {
  height: "100%",
  width: "60%",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
