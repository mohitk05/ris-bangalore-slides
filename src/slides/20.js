import React, { useEffect, useState, useRef } from "react";
import Layout from "./../Layout";

export default ({ action }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [fps, setFps] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      action("pause");
    }, 1000);
    let id = requestAnimationFrame(run);
    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
  const hist = useRef(Date.now());
  const step = useRef(0);
  const run = () => {
    if (step.current > 5) {
      setFps(Math.floor(1 / ((Date.now() - hist.current) / 1000)));
      step.current = 0;
    }
    step.current += 1;
    hist.current = Date.now();
    setCount(c => c + 1);
    if (step.current % 3) setCount1(c => c + 1);
    requestAnimationFrame(run);
  };
  return (
    <Layout>
      <div style={styles}>
        <h1 style={{ textAlign: "center" }}>Plus Points</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10%"
          }}
        >
          <div>
            <h2>Animations feel closer to the code</h2>
            <h2>Much more control</h2>
            <h2>Apply complex mathematical variations</h2>
            <h2>
              Avoid forceful re-render using <code>requestAnimationFrame</code>
            </h2>
          </div>
          <div style={{ fontSize: "3em" }}>
            <div
              style={{ height: 5, width: count * 0.5, background: "deeppink" }}
            />
            <div
              style={{
                height: 5,
                width: count1 * 0.5,
                background: "blue",
                marginTop: 10
              }}
            />
            <div>{fps} fps</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  height: "100%",
  width: "60%",
  margin: "auto"
};
