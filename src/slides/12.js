import React, { useEffect } from "react";
import Layout from "./../Layout";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default ({ action }) => {
    useEffect(() => {
        setTimeout(() => {
            action("pause");
        }, 1000);
    }, []);
    return (
        <Layout>
            <div style={styles}>
                <h1>Basic animation in CSS</h1>
                <SyntaxHighlighter customStyle={{ padding: 20, width: 400 }} language="css" style={docco}>
                    {`@keyframes slide {
    from { transform: scaleX(0) }
    to { transform: scaleX(1) }
}`}
                </SyntaxHighlighter>
                <SyntaxHighlighter customStyle={{ padding: 20, width: 400 }} language="css" style={docco}>
                    {`.slider {
    height: 10px;
    animation-name: slide;
    animation-duration: 5s;
    animation-timing-function: linear;
    transform-origin: left center;
}`}
                </SyntaxHighlighter>
                <div className="slider"></div>
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
