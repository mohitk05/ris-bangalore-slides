import React, { useEffect } from 'react'
import Layout from './../Layout'

export default ({ action, isPaused }) => {
    useEffect(() => {
        setTimeout(() => {
            action('pause')
        }, 1000)
    }, [])
    return <Layout>
        <div style={styles}>
            <img src="mk.png" style={{ width: 200 }}></img>
            <div>
                <h1 style={{ fontSize: '3em', marginTop: 20, marginBottom: 0 }}>Mohit Karekar</h1>
                <p style={{ marginTop: 5, fontSize: '1.3em' }}>Software Engineer @upGrad</p>
                <p style={{ margin: 0 }}><code style={{ color: 'deeppink' }}>JavaScript, Node, React, Vue, Graphics</code></p>
            </div>
        </div>
    </Layout>
}

const styles = { height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }
