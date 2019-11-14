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
            <h1 style={{ fontSize: '4em' }}>Syncing Animations with UI</h1>
            <p style={{ margin: 0, fontSize: '2em' }}>Case study: <code style={{ color: 'deeppink' }}>react-insta-stories</code></p>
        </div>
    </Layout>
}

const styles = { height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }
