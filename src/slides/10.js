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
                <h1>We'll talk about two approaches.</h1>
                <h1>
                    One which I initially used, for v1, and the second which I implemented
                    last month, for v2.
                </h1>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};
