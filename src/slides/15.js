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
        <h2>There's no way to gracefully restart a CSS animation.</h2>
        <SyntaxHighlighter language="javascript">
          {`className={ animate ? 'slider' : 'normal' }`}
        </SyntaxHighlighter>
        <h4>
          Moreover, a better way to handle such changes is to have some kind of
          API.
        </h4>
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
