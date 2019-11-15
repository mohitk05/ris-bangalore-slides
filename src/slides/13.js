import React, { useEffect, useRef, useState } from "react";
import Layout from "./../Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default ({ action }) => {
    const [count, setCount] = useState(0)
    const slider = useRef()
    const noneRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            action("pause");
        }, 1000);
    }, []);

    useEffect(() => {
        slider.current && slider.current.addEventListener('animationend', () => {
            console.log('animation end')
            setCount(c => c + 1)
        })
    }, [count])
    return (
        <Layout>
            <div style={styles}>
                <div>
                    <p>
                        1. We divide the progress bar into n divs of 100/n % width.<br />
                        2. Each gets a style object which is derived through a function.<br />
                        3. Container maintains a currentId.<br />
                        4. The progress bar currently being animated has a <code>animationend</code> event listener attached.<br />
                        5. When animation ends, callback is fired, which increments the currentId in container.<br />
                        6. Repeat, until end.
                    </p>
                    <SyntaxHighlighter customStyle={{ textAlign: 'left', paddingLeft: 20, paddingRight: 20 }} language="auto" style={docco}>
                        {`
<Container>
    <ProgressArray>
        {[...].map((p, i) => 
            <Progress 
                style={progressStyle(i === currentId ? 1 : (i < currentId ? 2 : 0))} 
            />
        )}
    </ProgressArray>
    <Story story={props.stories[this.state.currentId]} />
</Container>

const progressStyle = i => {
    switch(i) {
        case 0:
            return { empty div styles }
        case 1:
            return { animated div styles (with duration from video/custom) }
        case 2: 
            return { completed div styles }
    }
}
                        `}
                    </SyntaxHighlighter>
                </div>
                <div style={{ height: 500, width: 300, border: '2px solid #16161d', marginTop: 5, marginLeft: 40 }}>
                    <div style={{ display: 'flex' }}>
                        {[0, 1, 2, 3].map(p => {
                            return <div ref={p === count ? slider : noneRef} style={{ margin: '5px', width: '25%' }} className={p === (count < 4 ? count : count % 4) ? 'slider' : ''}></div>
                        })}
                    </div>
                    <h1 style={{ textAlign: 'center' }}>id: {count < 4 ? count : count % 4}</h1>
                </div>
            </div>
        </Layout>
    );
};

const styles = {
    height: "100%",
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
