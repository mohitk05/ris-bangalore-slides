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
                <h1>1. CSS Animations</h1>
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
