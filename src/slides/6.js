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
            <h1 style={{ textAlign: 'center' }}>Animations and Interactions</h1>
            <div style={{ width: '80%', margin: 'auto', marginTop: 30 }}>
                <h2 style={{ color: 'coral' }}>Animations</h2>
                <ul style={{ fontSize: '2em' }}>
                    <li>The default sliding animation</li>
                    <li>Loader</li>
                </ul>
            </div>
            <div style={{ width: '80%', margin: 'auto', marginTop: 30 }}>
                <h2 style={{ color: 'coral' }}>Interactions</h2>
                <ul style={{ fontSize: '2em' }}>
                    <li>Touch -  Next and Previous</li>
                    <li>Buffer - Image/video load</li>
                    <li>Other actions - opening see more, user triggered</li>
                    <li>Automated - on story end, move to next</li>
                </ul>
            </div>
        </div>
    </Layout>
}

const styles = { height: '100%', width: '100%', marginTop: 100 }
