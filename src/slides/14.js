import React, { useEffect } from "react";
import Layout from "./../Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default ({ action }) => {
  useEffect(() => {
    setTimeout(() => {
      action("pause");
    }, 1000);
  }, []);
  return (
    <Layout>
      <div style={styles}>
        <h1>Interactions</h1>
        <SyntaxHighlighter
          customStyle={{ padding: 20 }}
          language="javascript"
          style={docco}
        >
          {`// action function
const action = (state, hideProgress) => {
    this.setState({ paused: state === 'pause', hideProgress })
}`}
        </SyntaxHighlighter>
        <p>
          <img
            style={{ width: "100%" }}
            src="getProgressStyles.png"
            alt="progressStyles"
          />
        </p>
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
  alignItems: "center"
};
