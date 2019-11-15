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
                <h1 style={{ textAlign: "center" }}>Jotting down the Flows</h1>
                <ul style={{ fontSize: "1.5em" }}>
                    <li>
                        On <code>mousedown</code>, story should pause, and on{" "}
                        <code>mouseup</code> it should resume.
          </li>
                    <li>
                        When next is tapped, next story should begin from 0. Similar
                        behaviour for previous.
          </li>
                    <li>
                        When some media is buffering, story should pause, and resume when
                        done loading.
          </li>
                </ul>
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
