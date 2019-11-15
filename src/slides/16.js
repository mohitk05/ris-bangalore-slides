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
        <h1>Learnings</h1>
        <h2>
          CSS animations are great when you have to move from one visual state
          to another.
        </h2>
        <div class="boxSlide" />
        <h2>
          Or, for that matter, if your visual states are finite in number.
        </h2>
        <div class="boxStepSlide" />
        <h2>
          For finer control, we need something more, more than switching between
          classes.
        </h2>
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
