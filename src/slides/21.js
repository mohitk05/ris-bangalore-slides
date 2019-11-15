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
        <h1>Cherries on Top</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              borderRight: "1px solid #16161d",
              padding: 40,
              width: 400,
              fontSize: "1.5em"
            }}
          >
            <p style={{ fontSize: "2em", color: "deeppink" }}>TypeScript</p>
            <p>Introduces a lot of discipline</p>
            <p>Defines a workflow</p>
          </div>
          <div style={{ padding: 40, width: 400, fontSize: "1.5em" }}>
            <p style={{ fontSize: "2em", color: "deeppink" }}>Context</p>
            <p>Config sharing for open source libraries</p>
            <p>Local global data</p>
          </div>
        </div>
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
