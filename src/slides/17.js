import React, { useEffect } from "react";
import Layout from "./../Layout";
import SyntaxHighlighter from "react-syntax-highlighter";

export default ({ action }) => {
  useEffect(() => {
    setTimeout(() => {
      action("pause");
    }, 1000);
  }, []);
  return (
    <Layout>
      <div style={styles}>
        <h1>Animations API?</h1>
        <h4>(not yet though)</h4>
        <p>https://drafts.csswg.org/web-animations/</p>
        <img
          src="animationsApi.png"
          alt="animationsApi"
          style={{ width: "100%" }}
        />
      </div>
    </Layout>
  );
};

const styles = {
  height: "100%",
  width: "60%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
};
